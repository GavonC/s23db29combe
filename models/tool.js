const mongoose = require("mongoose")
const toolSchema = mongoose.Schema({
    tool_type: String,
    size: String,
    cost: Number
})
module.exports = mongoose.model("tool", toolSchema)