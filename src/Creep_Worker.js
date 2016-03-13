var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");

module.exports = {
    name : "Worker",
    className : CreepConst.Creep_Worker,
    body : [WORK, WORK, CARRY, MOVE],
    actionName : ActionConst.Action_Work,
}