var tool = require('../models/tool');
//list of all tools

exports.tool_list = function(req, res) 
{
    res.send('NOT IMPLEMENTED: Tool list');
};
exports.tool_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: tool create post');
};
exports.tool_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: tool create post');
};
exports.tool_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: costume delete DELETE ' + req.params.id);
};
exports.tool_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: tool update PUT' + req.params.id);
};
