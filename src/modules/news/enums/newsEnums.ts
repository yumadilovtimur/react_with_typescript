interface ICategoryShape {
    [propName: string]: {
        readonly code: string,
        readonly text: string,
    }
}

export const newsCategories: ICategoryShape = {
    Finance: {
        code: 'Finance',
        text: 'Финансы',
    },
    Education: {
        code: 'Education',
        text: 'Образование',
    },
}