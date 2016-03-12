var CreepConst = require("Creep_Const");

module.exports = function(spawnName)
{
    console.log("Manage population spawn: " + spawnName);
    var population = getSpawnPopulation(spawnName);
    reproducePopulation(spawnName, population);
}

function reproducePopulation(spawnName, population)
{
    if ()
}



function getSpawnPopulation(spawnName)
{
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
            if (isWorker(creep)){
                workerCount += 1;
            } else
            if (isGuard(creep)){
                guardCount += 1;
            } else
            if (isHealer(creep)){
                healerCount += 1;
            }
        }
    }
    return {}
    //new Array(minerCount, workerCount, guardCount, healerCount);
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
    if (creep.memory.class == "Creep_Worker")
    {
        return true;
    } else
    {
        return false;
    }
}

function isGuard(creep)
{
    if (creep.memory.class == "Creep_Guard")
    {
        return true;
    } else
    {
        return false;
    }
}

function isHealer(creep)
{
    if (creep.memory.class == "Creep_Healer")
    {
        return true;
    } else
    {
        return false;
    }
}