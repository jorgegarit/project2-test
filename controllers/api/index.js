const router = require('express').Router();

const userRoutes = require("./user.routes");
const commentRoutes = require("./comment.route");
const imageRoutes = require("./image.routes");
const journalRoutes = require("./journal.routes");

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/image', imageRoutes);
router.use('/journal', journalRoutes);

module.exports = router;