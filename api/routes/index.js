var express = require('express');
var router = express.Router();

const AssetsController = require ("../controllers/AssetsController");
const AssetsInstance = new AssetsController();

router.get("/api/carouseles", (req,res) => AssetsInstance.getUser(req,res));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
