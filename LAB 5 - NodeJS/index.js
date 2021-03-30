const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/v1/messages', (req, res) => {
    res.send('Get message');
});
app.post('/api/v1/messages', (req, res) => {
    res.send('Post message');
});
app.put('/api/v1/messages/:id', (req, res) => {
    res.send('Put message ' + req.params.id);
});
app.delete('/api/v1/messages/:id', (req, res) => {
    res.send('Delete message ' + req.params.id);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});