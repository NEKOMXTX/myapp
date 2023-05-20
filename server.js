const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles'));

app.use(express.static('images'));

app.use(express.static('scripts'));

app.get('/', (req, res) => {
    res.render(createPath('mainpage'));
});

app.get('/places', (req, res) => {
    res.render(createPath('places'));
});

app.get('/books', (req, res) => {
    res.render(createPath('books'));
});

app.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'));
}); /* перехватчик ошибок должен быть в конце  */