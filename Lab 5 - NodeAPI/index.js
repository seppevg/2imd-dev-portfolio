const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const messagesRouter = require('./routers/api/v1/messages');
const pug = require('pug');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        "title": 'Homepage',
        "header": 'Welcome!',
        "message": 'This is my first time using node, pug and heroku!'
    });
});

app.use('/api/v1/messages', messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});