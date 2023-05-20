const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(createPath('mainpage'));
});

app.get('/places', (req, res) => {
    res.sendFile(createPath('places'));
});

app.get('/books', (req, res) => {
    res.sendFile(createPath('books'));
});

app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
}); /* перехватчик ошибок должен быть в конце  */