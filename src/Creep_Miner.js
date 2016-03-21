var CreepConst = require("Creep_Const");
var ActionConst = require("Action_Const");

module.exports = {
    name : "Miner",
    className : CreepConst.Creep_Miner,
    body : [[WORK, WORK, CARRY, MOVE], //0
        [WORK, WORK, CARRY, CARRY, MOVE], //1
        [WORK, WORK, WORK, CARRY, MOVE], //2
        [WORK, WORK, WORK, CARRY, CARRY, MOVE], //3
        [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], //4
        [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], //5
        [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], //6
        [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE], //7
        [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], //8
        [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], //9
        [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], //10
    ],
    actionName : ActionConst.Action_Mine,
    state : "harvest",
}