var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");

module.exports = {
    name : "Miner",
    className : CreepConst.Creep_Miner,
    body : [WORK, CARRY, MOVE],
    actionName : ActionConst.Action_Mine,
}