const db = []; 
let nextId = 1; 

const model = (body, id = nextId++) => {
    const ano = body.ano
    const soNumero = true

    ano.forEach(el => {
        if(isNaN(Number(el))) {
            soNumero = false
        }
    })

    
    if(
       body.nome != undefined &&
       body.matricula != undefined &&
       body.curso != undefined &&
       body.ano != undefined &&
       body.nome != "" &&
       body.matricula != "" &&
       body.curso != "" &&
       body.ano != "" 

    ) { 
        return {
        id,
        nome: body.nome,
        matricula: body.matricula,
        curso: body.curso,
        ano: ano
        }
    }
}
 
module.exports = model
