const express = require("express");
const estudantes_controller = require("../controllers/estudande.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(estudantes_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudantes_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = estudantes_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudantes_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudantes_controller.destroy(req.params.id)
    res.json()
})

module.exports = router