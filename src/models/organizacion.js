const {Schema, model} = require ("mongoose")

const OrganizacionShema = Schema ({
    nombreOrganizacion:{
        type: String,
    },

    idOrganizacion: {
        type: String,
    },

    imagen: {
        type: String,
    },

    mapaExpansionTerritorial: {type:String},

    lugarDeOrigen: {
        type: String,
    },

    añoDeSurgimiento: {
        type: String,
    },

    principalesLideres: {
        lideres: {
            lider1:{type: String},
            lider2:{type: String},
            lider3: {type: String},
            lider4: {type: String},
        } 
    },

    gruposAntagonicos: {
        grupos: {
            grupo1: {type: String},
            grupo2: {type: String},
            grupo3: {type: String}
        }
    },

    Descripcion: {
        type: String,
    },

    urlVideo: {
        type: String,
    },

    celulasCriminales: {
        mapaDeExpansionTerritorial: {type: String},
        celulaUno: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaDos: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaTres: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaCuatro: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaCinco: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaSeis: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaSiete: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },
        celulaOcho: {
            imagenDeAgrupación: {type: String},
            nombreDeAgrupacion: {type: String},
            descipcionDeAgrupacion: {type: String}
        },

    }
})



OrganizacionShema.methods.toJSON = function (){
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("Organizacion", OrganizacionShema, "Organizaciones")