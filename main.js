const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv') ;

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

function gerarNumeroAleatorio() {
    return Math.random();
}

app.get('/token', (req, res) => {
    const payload = {
        data: gerarNumeroAleatorio(),
    };

    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    const token = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Servidor Pronto na Porta ${port}`);
})
