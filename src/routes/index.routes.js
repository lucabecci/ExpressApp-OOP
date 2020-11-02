const { Router } = require("express");
const router = Router();
const indexCtrl = require("../controllers/index.controller");
router.get("/", indexCtrl.index);
router.get("/github", indexCtrl.github);

module.exports = router;
