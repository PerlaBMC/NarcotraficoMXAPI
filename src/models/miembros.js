const {Schema, model} = require ("mongoose")

const MiembrosShema = Schema ({
Nombre: {type: String},
Apodo: {type: String},
FotoInicial: {type: String}, 
FechaDeNacimiento: {type: String},
LugarDeNacimiento:  {type: String},
OrganizacionDePertenencia: {type: String},
FuncionDentroDeLaOrganizacion: {type: String},
SituacionPenal: {type: String},
Fotos: {
   Perfiles: {
      perfilUno: {type:String},
      perfilDos: {type:String},
      perfilTres: {type: String}
   }
},
HitoriaDeVida: {
   Relato: {
      Titulo: {type:String},
      parrafoInicial: {type: String},
      Descripción: {
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
         parrafoSiete: {type: String},
         subtituloOcho: {type: String},
         parrafoOcho: {type: String},
         subtituloNueve: {type: String},
         parrafoNueve: {type: String}
      },
      FotosDeRelato: {
         fotoUno: {type:String},
         fotoDos: {type:String},
         fotoTres: {type:String}
      }
   }
},

urlDeVideo: {type: String}
});



MiembrosShema.methods.toJSON = function (){
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("Miembro", MiembrosShema, "Miembros")