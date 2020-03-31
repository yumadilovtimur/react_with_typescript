import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/newsActions';
import * as selectors from '../selectors/newsSelectors';
import * as enums from '../enums/newsEnums';
import * as types from '../types/newsTypes';
import { ICreateAction } from '../../../common/helpers/createActions'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

interface INewsContainerProps extends types.NewsStore {
    loadNews: ICreateAction,
    addToFavorites: ICreateAction,
}

export class NewsContainer_ extends React.PureComponent<INewsContainerProps> {
    componentDidMount() {
        const { loadNews } = this.props;
        loadNews();
    }

    parseDate = (date: string): string => {
        return new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(date));
    }

    getFullName = (...names: string[]) => {
        const name = [...names].reduce((accumulator: string[], name: string) => {
            return name ? [...accumulator, name] : [...accumulator]
        }, []);

        return name.join(' ');
    }

    addToFavorites = (id: types.Id) => (event: React.MouseEvent): void => {
        const { addToFavorites } = this.props;
        addToFavorites(id);
    }

    render() {
        const { newsLoader, newsList, favoritesNews } = this.props;

        if (newsLoader) return (
            <Backdrop open={newsLoader}>
                <CircularProgress />
            </Backdrop>
        );

        return (
            <div>
                {
                    newsList.map((item: types.News) => {
                        const category = enums.newsCategories[item.category].text

                        return (
                            <Paper key={item.id}>
                                <Typography variant="h5" gutterBottom>
                                    {item.name}
                                </Typography>

                                {
                                    item.isBreaking
                                        ? <StarIcon />
                                        : null
                                }

                                <button type="button" onClick={this.addToFavorites(item.id)}>
                                    Добавить в избранное
                                </button>

                                <Avatar>
                                    {item.author.firstName[0]}
                                </Avatar>

                                <Typography variant="overline">
                                    {this.getFullName(item.author.firstName, item.author.lastName)}
                                </Typography>

                                {
                                    category &&
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Категория: {category}
                                    </Typography>
                                }

                                {
                                    (Boolean(item.comments.summ) && Boolean(item.comments.items.length)) &&
                                    <>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            Комментарии: ({item.comments.summ})
                                        </Typography>
                                        {
                                            item.comments.items.map((comment: types.Comment) => {
                                                return (
                                                    <Card key={comment.id}>
                                                        <CardContent>
                                                            <Avatar>
                                                                {comment.author.firstName[0]}
                                                            </Avatar>
                                                            <Typography variant="h6" gutterBottom>
                                                                {this.getFullName(comment.author.firstName, comment.author.lastName)}
                                                            </Typography>
                                                            {
                                                                comment.likes &&
                                                                <Typography variant="overline">
                                                                    Количество лайков: {comment.likes}
                                                                </Typography>
                                                            }
                                                            <Typography variant="caption" display="block" gutterBottom>
                                                                {comment.comment}
                                                            </Typography>
                                                            <Typography variant="caption" display="block" gutterBottom>
                                                                Дата: {this.parseDate(comment.date)}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </>
                                }
                            </Paper>
                        )
                    })
                }

                Избранное:
                {
                    favoritesNews.map(item => (
                        <div key={item.id}>{item.id}</div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state: { news: types.NewsStore }) => ({
    newsList: selectors.newsList(state),
    newsLoader: selectors.newsLoader(state),
    favoritesNews: selectors.favoritesNews(state),
});

const mapDispatchToProps = {
    loadNews: actions.loadNews.request,
    addToFavorites: actions.addToFavorites,
};

const NewsContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(NewsContainer_);

export { NewsContainer };