const Organizaciones = require("../models/organizacion");
const Miembros = require("../models/miembros");
const Noticias = require ("../models/noticia")

//Controles para informción de Organización

const getInformacionDeOrganizaciones = async (req, res) => {
	try {
		const OrgInfo = await Organizaciones.find();
		return res.json({
			ok: true,
			msg: "Información de organizaciones obtenida con éxito",
			data: OrgInfo,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en servidor",
			data: {},
		});
	}
};

const getIdOrganizacion = async (req, res) => {
	try {
		const { id } = req.params;
		const organizacion = await Organizaciones.findById(id);

		return res.json({
			ok: true,
			msg: "Organizacion obtenida",
			data: organizacion,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const postInformacionDeOrganizacion = async (req, res) => {
	try {
		const {
			nombreOrganizacion,
			idOrganizacion,
			imagen,
			mapaExpansionTerritorial,
			lugarDeOrigen,
			añoDeSurgimiento,
			principalesLideres,
			gruposAntagonicos,
			Descripcion,
			urlVideo,
			celulasCriminales,
		} = req.body;

		const datosDeOrganizacion = {
			nombreOrganizacion,
			idOrganizacion,
			imagen,
			mapaExpansionTerritorial,
			lugarDeOrigen,
			añoDeSurgimiento,
			principalesLideres,
			gruposAntagonicos,
			Descripcion,
			urlVideo,
			celulasCriminales
		};

		const publicacionDeInformacion = await Organizaciones(
			datosDeOrganizacion
		).save();
		return res.json({
			ok: true,
			msg: "Datos publicados con éxito",
			data: publicacionDeInformacion,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const putInformacionDeOrganizacion = async (req, res) => {
	try {
		const { id } = req.params;
		const {
			nombreOrganizacion,
			idOrganizacion,
			imagen,
			mapaExpansionTerritorial,
			lugarDeOrigen,
			añoDeSurgimiento,
			principalesLideres,
			gruposAntagonicos,
			Descripcion,
			urlVideo,
			celulasCriminales,
		} = req.body;

		const nuevaInformacion = {
			nombreOrganizacion,
			idOrganizacion,
			imagen,
			mapaExpansionTerritorial,
			lugarDeOrigen,
			añoDeSurgimiento,
			principalesLideres,
			gruposAntagonicos,
			Descripcion,
			urlVideo,
			celulasCriminales
		};

		const putInformacion = await Organizaciones.findByIdAndUpdate(
			id,
			nuevaInformacion,
			{
				new: true,
			}
		);
		return req.json({
			ok: true,
			msg: "Información actualizada",
			data: putInformacion,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const deletInformacion = async (req, res) => {
	try {
		const { id } = req.params;
		const deletDatos = await Organizaciones.findByIdAndRemove(id);

		return res.json({
			ok: true,
			msg: "Información Borrada",
			data: deletDatos,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

//Controles para información de Miembros

const getDatosDeMiembros = async (req, res) => {
	try {
		const datosMiembros = await Miembros.find();

		return res.json({
			ok: true,
			msg: "Información de miembros obtenidas con éxito",
			data: datosMiembros,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const getMiembroId = async (req, res) => {
	try {
		const { id } = req.params;
		const getMiembro = await Miembros.findById(id);

		return res.json({
			ok: true,
			msg: "Miembro obtenido con éxito",
			data: getMiembro,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const postDatosDeMiembro = async (req, res) => {
	try {
		const {
			Nombre,
			Apodo,
			FotoInicial,
			FechaDeNacimiento,
			LugarDeNacimiento,
			OrganizacionDePertenencia,
			FuncionDentroDeLaOrganizacion,
			SituacionPenal,
			Fotos,
			HitoriaDeVida,
			urlDeVideo
		} = req.body;

		const datosDeMiembro = {
			Nombre,
			Apodo,
			FotoInicial,
			FechaDeNacimiento,
			LugarDeNacimiento,
			OrganizacionDePertenencia,
			FuncionDentroDeLaOrganizacion,
			SituacionPenal,
			Fotos,
			HitoriaDeVida,
			urlDeVideo
		};

		const nuevaInformacion = await Miembros(datosDeMiembro).save();
		return res.json({
			ok: true,
			msg: "Datos de miembro creada con éxito",
			data: nuevaInformacion,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const putDatosDeMiembro = async (req, res) => {
	try {
		const {
			Nombre,
			Apodo,
			FotoInicial,
			FechaDeNacimiento,
			LugarDeNacimiento,
			OrganizacionDePertenencia,
			FuncionDentroDeLaOrganizacion,
			SituacionPenal,
			Fotos,
			HitoriaDeVida,
			urlDeVideo
		} = req.body;

		const nuevaInformacion = {
			Nombre,
			Apodo,
			FotoInicial,
			FechaDeNacimiento,
			LugarDeNacimiento,
			OrganizacionDePertenencia,
			FuncionDentroDeLaOrganizacion,
			SituacionPenal,
			Fotos,
			HitoriaDeVida,
			urlDeVideo
		};

		const informacionModificada = await Miembros.findByIdAndUpdate(
			id,
			nuevaInformacion,
			{
				new: true,
			}
		);

		return res.json({
			ok: true,
			msg: "Información modificada con éxito",
			data: informacionModificada,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const deletMiembro = async (req, res) => {
try {
    const { id } = req.params;
    const miembroEliminado = await Miembros.findByIdAndRemove(id);
    
	return res.json({
        ok: true,
        msg: "Miembro eliminado con éxito",
        data: miembroEliminado
    });
}
catch (error) {
    res.status(500).json({
        ok: false,
        msg: "Error en el servidor",
        data: {}
    });
}};

//Controles para Noticias

const getNoticia = async (req, res) => {
	try {
		const Noticia = await Noticias.find();

		return res.json({
			ok: true,
			msg: "Noticias obtenidas con éxito",
			data: Noticia,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const getNoticiaId = async (req, res) => {
	try {
		const { id } = req.params;
		const getNoticia = await Noticias.findById(id);

		return res.json({
			ok: true,
			msg: "Noticia obtenido con éxito",
			data: getNoticia,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const postNoticia = async (req, res) => {
	try {
		const {
			ImagenDePortada,
			Titulo,
			pieDeNota,
			Noticia,
			ImagenUno,
			ImagenDos, 
			ImagenTres
		} = req.body;

		const infNoticia = {
			ImagenDePortada,
			Titulo,
			pieDeNota,
			Noticia,
			ImagenUno,
			ImagenDos,
			ImagenTres
		};

		const nuevaInformacion = await Noticias(infNoticia).save();
		return res.json({
			ok: true,
			msg: "Información de Noticia creada con éxito",
			data: nuevaInformacion,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};




module.exports = {
	getInformacionDeOrganizaciones,
	getIdOrganizacion,
	postInformacionDeOrganizacion,
	putInformacionDeOrganizacion,
	deletInformacion,
	getDatosDeMiembros,
	getMiembroId,
    postDatosDeMiembro,
    putDatosDeMiembro,
    deletMiembro,
	getNoticia,
	getNoticiaId,
	postNoticia
};
