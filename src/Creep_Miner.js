var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");
var ActionMine = require("Action_Mine");

module.exports = {
    name : "Miner",
    className : CreepConst.Creep_Miner,
    body : [WORK, CARRY, MOVE],
    action : ActionConst.Action_Mine;
}