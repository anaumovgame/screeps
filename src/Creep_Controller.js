module.exports = function()
{
    for (var creepName in Game.creeps)
    {
        Game.creeps[creepName].action();
    }
}
