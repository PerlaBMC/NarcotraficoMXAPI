const Router = require("express")

const {
    getInformacionDeOrganizaciones,
    getIdOrganizacion,
    postInformacionDeOrganizacion,
    putInformacionDeOrganizacion,
    deletInformacion,
} = require ("../controllers/information.ctrl");

const router = Router();

//Organizacion
router.get("/", getInformacionDeOrganizaciones);
router.get("/:id", getIdOrganizacion);
router.post("/", postInformacionDeOrganizacion);
router.put("/:id", putInformacionDeOrganizacion);
router.delete("/:id", deletInformacion);


module.exports = router;