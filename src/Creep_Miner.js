var CreepConst = require("Creep_Const");

module.exports = {
    name : "Miner",
    className : CreepConst.minerName,
    body : [WORK, CARRY, MOVE],
    action : function() {
    }
}