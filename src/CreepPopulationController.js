module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);

    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        if (creep.memory.spawnName == spawnName)
        {
            console.log(spawnName + " : " + creepName);
        }
    }
};