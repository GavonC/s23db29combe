var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/tool');

router.get('/', api_controller.api);

router.post('./tool', tool_controller.tool_create_post);

router.delete('/tool/:id', tool_controller.tool_delete);

router.put('/tool/:id', tool_controller.tool_update_put);

router.get('/tool/:id', tool_controller.tool_detail);

router.get('/tool', tool_controller.tool_list);

module.exports = router; 

