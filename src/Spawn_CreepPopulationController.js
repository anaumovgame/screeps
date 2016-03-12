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
            if (isMiner(creep)) {
                minerCount += 1;
            } else
            if ()
        }
    }
}

function isMiner(creep)
{
    if (creep.memory.class == "Creep_Miner")
    {
        return true;
    } else
    {
        return false;
    }
}

function isWorker(creep)
{
    if (creep.memory.class == "Worker")
    {
        return true;
    } else
    {
        return false;
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