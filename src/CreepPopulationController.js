module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);

    for (var creepName in Game.creeps)
    {
        if (Game.creeps[creepName].memory.spawnName == spawnName)
        {
            
        }
    }
};