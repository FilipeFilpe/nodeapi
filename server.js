const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciado o App
const app = express();
app.use(express.json()); // permitir envio de dados no formato de json
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

requireDir('./src/models');
// Iniciando a rota
app.use('/api', require('./src/routes')); // recebe todas as requisições

// Definindo a porta
app.listen(3001);