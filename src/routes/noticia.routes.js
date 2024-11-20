const Router = require("express")

const {
    getNoticia,
	getNoticiaId,
	postNoticia
} = require ("../controllers/information.ctrl");

const router = Router();


//Miembro
router.get("/", getNoticia);
router.get("/:id", getNoticiaId);
router.post("/", postNoticia);


module.exports = router;