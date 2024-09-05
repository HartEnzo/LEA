const db = []; 
let nextId = 1; 

const model = (body, id = nextId++) => {
    if(
       body.titulo != undefined &&
       body.autor != undefined &&
       body.genero != undefined &&
       body.ano != undefined &&
       body.titulo != "" &&
       body.autor != "" &&
       body.genero != "" &&
       body.ano <= 105 

    ) { 
        return {
        id,
        titulo: body.titulo,
        autor: body.autor,
        genero: body.genero,
        ano: body.ano,
        }
    }
}
 
module.exports = model
