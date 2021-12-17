const cors = require('cors');

const express = require('express');

const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json())

const prestadores = require('./rotas/prestadores.js');

app.use(prestadores)

app.use('/', router);

app.listen(3000, ()=>{
    console.log('listening on localhost:3000')
})