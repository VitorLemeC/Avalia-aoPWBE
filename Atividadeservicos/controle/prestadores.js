
const {con} = require('./bdconnect.js')
const modelo = require('../modelo/pretadores.js')
const { json } = require('express')

const doGet = (req, res) =>{
    let string = 'select * from servicos'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const doPost = (req,res) =>{
    let prestador = "\""+req.body.prestador+"\"";
    let valor_hora = "\""+req.body.valor_hora+"\"";
    let horas_trabalhadas =  "\""+req.body.horas_trabalhadas+"\"";
    let string = `insert into servicos(prestador, valor_hora, horas_trabalhadas) values (${prestador}, ${valor_hora}, ${horas_trabalhadas})`
    con.query(string, (err, result) =>{
    
        if(result.affectedRows == 1) {
            res.json(modelo.reformJson(req.body, result.insertId));
        }else {
            res.status(400).end();
        }
    })
}

    const doPut = (req, res) => {
        let id_servico = req.body.id_servico;
        let prestador = "\""+req.body.prestador+"\"";
        let valor_hora = "\""+req.body.valor_hora+"\"";
        let horas_trabalhadas = "\""+req.body.horas_trabalhadas+"\"";
        let string = `update servicos set prestador = ${prestador}, valor_hora = ${valor_hora}, horas_trabalhadas = ${horas_trabalhadas} where id_servico = ${id_servico}`;
        con.query(string, (err, result) => {
            if(result.affectedRows == 1) {
                res.json(req.body)
            }else {
                res.status(404).end()
            }
        })
    }

    const doDelete = (req, res) => {
        let string = `delete from servicos where id_servico = ${req.params.id_servico}`
        con.query(string, (err, result) => {
            if(result.affectedRows == 1) {
                res.status(201).end()
            }else {
                res.status(404).end()
            }
        })
    }


//Exportacao da funcao
module.exports = {
    doGet,
    doPost,
    doPut,
    doDelete,
    doGetCaunt
}
