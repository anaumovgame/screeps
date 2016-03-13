var ActionList = require("Action_List");

module.exports = function()
{
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];

        //ToDo: Вынести, это костыль
         /*if (creep.ticksToLive < 200)
         {
             var spawn = Game.spawns[creep.memory.spawnName];
             creep.moveTo(spawn);
         } else {*/
             ActionList[creep.memory.actionName](creep);
         //}
    }
}
