const { router } = require('../app');
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
exports.tool_detail = async function (req, res) {
    console.log("detail" +req.param.id)
    try {
        result = await tool.findById(req.params.id)
        res.send(result)
    } catch(error){
        res.stats(500)
        res.send('{"error": document for id${req.params.id} not found');
    }
};
exports.tool_create_post = async function(req, res) {
    console.log(req.body)
    let document = new tool();
    document.tool_type = req.body.tool_type;
    document.cost=req.body.cost;
    document.size=req.body.size;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
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