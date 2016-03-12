module.exports = function(spawnName)
{
    console.log("Manage population spawn: " + spawnName);

    var minerCount = 0;
    var workerCount = 0;
    var guardCount = 0;
    var healerCount = 0;

    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        if (creep.memory.spawnName == spawnName)
        {
            minerCount += isMiner();
        }
    }
}

function isMiner(creep)
{
    if (creep.memory.class == "Miner")
    {
        return true;
    } else
    {
        return false;
    }
}