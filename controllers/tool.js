var tool = require('../models/tool');
//list of all tools

exports.tool_list = async function(req, res) 
{
    try{
        theTools = await tool.find();
        res.send(theTools);
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
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
exports.tool_view_all_page = async function(req, res) {
    try{
        theTools=await tool.find();
        res.render('tools',{titile: 'tools search results', results:theTools});
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
};
