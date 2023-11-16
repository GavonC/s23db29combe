var express = require('express');
const tool_controller=require('../controllers/tool');
var router = express.Router();

/* GET home page. */
router.get('/', tool_controller.tool_view_all_page); 
module.exports = router;
router.get('/tool/:id',tool_controller.tool_detail);
router.get('/detail', tool_controller.tool_view_one_Page);
router.get('/create',tool_controller.tool_create_Page);