const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.get('/', (req, res) => {
    res.send("<h1>hiiii</h1>");
})