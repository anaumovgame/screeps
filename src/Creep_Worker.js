var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");

module.exports = {
    name : "Worker",
    className : CreepConst.Creep_Worker,
    body : [[WORK, WORK, CARRY, MOVE], //0
        [WORK, WORK, CARRY, CARRY, MOVE], //1
        [WORK, WORK, CARRY, CARRY, MOVE, MOVE], //2
        [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], //3
        [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE], //4
        [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], //5
        [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], //6
        [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], //7
        [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], //8
        [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], //9
        [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], //10
        [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], //10
    ],
    actionName : ActionConst.Action_Work,
}