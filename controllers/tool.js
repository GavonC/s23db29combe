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
exports.tool_delete = async function(req, res) {
    console.log("delete" +req.params.id)
    try{
        result = await tool.findByIdAndDelete( req.params.id)
        console.log("removed" +result)
        res.send(result)
    } catch(err){
        res.status(500)
        res.send('{"error": Error deleting ${err}}');
    }
};
exports.tool_update_put = async function(req, res) {
    console.log('update on id ${req.params.id} with body ${JSON.stringify(req.body)}')
    try {
        let toUpdate = await tool.findById(req.params.id)
        if(req.body.tool_type)
            toUpdate.tool_type=req.body.tool_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("sucess " + result)
        res.send(result)
    } catch(err){
        res.status(500)
        res.send('{"error": ${err}: Update for id${req.params.id}failed');
    }
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

exports.tool_view_one_Page = async function(req, res){
    console.log ("single view for id" + req.query.id)
    try{
        result=await tool.findById( req.query.id)
        res.render('tooldetail',
            {title:'tool Detail', toShow:result});
    }
    catch(err){
        res.status(500)
        res.send('{"error":"${err}"}');
    }
};
exports.tool_create_Page = function(req, res){
    console.log("create view")
    try{
        res.render('toolcreate',{title:'tool create'});
    }
    catch(err){
        res.status(500)
        res.send('{"error":"${err}"}');
    }
};