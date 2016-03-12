module.exports = function(spawnName)
{
    console.log("Manage population spawn: " + spawnName);

    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        if (creep.memory.spawnName == spawnName)
        {

        }
    }
}

function isMiner(creep)
{
    if (creep.memory.class == "Miner")
    {
        
    }
}