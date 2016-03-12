module.exports = function()
{
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        creep.action(creep);
    }
}
