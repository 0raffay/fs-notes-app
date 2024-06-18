const express = require("express");
const router = express.Router();
const notesContoller = require("../controllers/notesController");

router.route("/").get(notesContoller.getNotes);
router.route("/create").post(notesContoller.createNote);
router.route("/:id").put(notesContoller.updateNote);
router.route("/:id").delete(notesContoller.deleteNote);


module.exports = router;
