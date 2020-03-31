export const loadNews = () => {
    return fetch('api/news', {
        method: 'GET'
    })
        .then(response => response.json())
}

// Mock-api JSON: (directive: mock-api\news\GET.json)
// [
//     {
//         "id": "fa40bd1a-9380-4e23-90b1-bfad9326cfcc",
//         "name": "News #1",
//         "date": "2014-01-01T23:28:56.782Z",
//         "category": "Finance",
//         "author": {
//             "firstName": "Boris",
//             "lastName": "Ivanov"
//         },
//         "isBreaking": true,
//         "comments": {
//             "summ": 2,
//             "items": [
//                 {
//                     "id": "cf8c1e8c-047b-4d41-9a07-cefc52bc74a1",
//                     "comment": "Comment 1.1",
//                     "date": "2014-01-01T23:28:56.782Z",
//                     "likes": 2,
//                     "author": {
//                         "firstName": "Ivan",
//                         "lastName": "Petrov"
//                     }
//                 },
//                 {
//                     "id": "c5fa36df-5ebb-4676-8310-ab8c81d1b39f",
//                     "comment": "Comment 1.2",
//                     "date": "2014-01-01T23:28:56.782Z",
//                     "likes": null,
//                     "author": {
//                         "firstName": "Alena",
//                         "lastName": null
//                     }
//                 }
//             ]
//         }
//     },
//     {
//         "id": "1d1c4307-e766-492e-8abe-7d613ff0dc8a",
//         "name": "News #2",
//         "date": "2014-01-01T23:28:56.782Z",
//         "category": "Education",
//         "author": {
//             "firstName": "Tanya",
//             "lastName": "Ivanova"
//         },
//         "isBreaking": false,
//         "comments": {
//             "summ": 0,
//             "items": null
//         }
//     }
// ]
