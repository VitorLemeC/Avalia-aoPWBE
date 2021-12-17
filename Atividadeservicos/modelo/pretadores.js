const { json } = require("express");

const reformJson = (item, id_servico)=> {
    item.id_servico = id_servico;
    return item;

}


const calcISS = (sqlJson)=> {
    json = {
        "id_servico": sqlJson.id_servico,
        "prestador": sqlJson.prestador,
        "valorHora": sqlJson.valorHora,
        "horasTrabalhadas": sqlJson.horasytabalhadas,
        "subtotal": sqlJson.subtotal,
        "iss" : 0,
        "total" : 0
    }
    json.iss = (json.subtotal)
    json.total = (json.subTotal)
    return json
}

module.exports = {
    reformJson,
    calcISS
}