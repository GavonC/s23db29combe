var express = require('express');
const tool_controller=require('../controllers/tool');
var router = express.Router();

/* GET home page. */
router.get('/', tool_controller.tool_view_all_page); 
module.exports = router;
