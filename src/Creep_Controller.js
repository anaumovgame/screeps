var ActionList = require("Action_List");

module.exports = function()
{
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        ActionList[creep.memory.actionName](creep);
    }
}
