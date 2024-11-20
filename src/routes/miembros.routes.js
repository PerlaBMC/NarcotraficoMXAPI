const Router = require("express")

const {
    getDatosDeMiembros,
	getMiembroId,
    postDatosDeMiembro,
    putDatosDeMiembro,
    deletMiembro,
} = require ("../controllers/information.ctrl");

const router = Router();


//Miembro
router.get("/", getDatosDeMiembros);
router.get("/:id", getMiembroId);
router.post("/", postDatosDeMiembro);
router.put("/:id", putDatosDeMiembro);
router.delete("/:id", deletMiembro)

module.exports = router;