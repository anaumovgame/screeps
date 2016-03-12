var CreepConst = require("Creep_Const");
var ActionMine = require("Action_Mine");

module.exports = {
    name : "Miner",
    className : CreepConst.Creep_Miner,
    body : [WORK, CARRY, MOVE],
    action : ActionMine(),
}