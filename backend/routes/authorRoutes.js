const router = require("express").Router();
const {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthor,
} = require("../controllers/AuthorController");
router.post("author/", createAuthor);
router.patch("author/:id", updateAuthor);
router.delete("author/:id", deleteAuthor);
router.get("author/:id", getAuthor);

module.exports = router;
