var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");

module.exports = {
    name : "Worker",
    className : CreepConst.Creep_Worker,
    body : [[WORK, WORK, CARRY, MOVE], //0
        [WORK, WORK, CARRY, CARRY, MOVE], //1
        [WORK, WORK, CARRY, CARRY, MOVE, MOVE], //2
        [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], //3
        [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], //4
        [WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], //5
    ],
    actionName : ActionConst.Action_Work,
}