const {Schema, model} = require ("mongoose"); 

const noticiaShema = Schema ({
    ImagenDePortada: {type: String},
    Titulo: {type: String},
    pieDeNota: {type: String},
    Noticia: {
         subtituloUno: {type: String},
         parrafoUno: {type: String},
         subtituloDos: {type: String},
         parrafoDos: {type: String},
         subtituloTres: {type: String},
         parrafoTres: {type: String},
         subtituloCuatro: {type: String},
         parrafoCuatro: {type: String},
         subtituloCinco: {type: String},
         parrafoCinco: {type: String},
         subtituloSeis: {type: String},
         parrafoSeis: {type: String},
         subtituloSiete: {type: String},
         parrafoSiete: {type: String}
    },
    ImagenUno: {type: String},
    ImagenDos: {type: String},
    ImagenTres: {type: String},
})

noticiaShema.methods.toJSON = function (){
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("Noticia", noticiaShema, "Noticias")