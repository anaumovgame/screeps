var CreepConst = require("Creep_Const");
var CreepClasses = require("Creep_Classes");
var SpawnConst = require("Spawn_Const");

module.exports = function(spawnName)
{
    console.log("Manage population spawn: " + spawnName);
    var population = getSpawnPopulation(spawnName);
    reproducePopulation(spawnName, population);
}

function reproducePopulation(spawnName, population)
{

    if (population.minerCount < Game.spawns[spawnName].memory.minerMax)
    {
        createCreep(spawnName, CreepConst.Creep_Miner);
    }
}

function createCreep(spawnName, className)
{
    console.log("Spawn : " + spawnName + " : Create creep : " + className );
    var creepClass = CreepClasses[className];
    var creepName = Game.spawns[spawnName].createCreep(creepClass.body, null, {role : creepClass.role, spawnName : spawnName});
    //Game.creeps[creepName].name = creepClass.name + "_" + creepName;
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
    console.log(spawnName + " : " + minerCount);
    return {minerCount : minerCount, workerCount : workerCount, guardCount : guardCount, healerCount : healerCount};
    //new Array(minerCount, workerCount, guardCount, healerCount);
}

function isMiner(creep)
{
    if (creep.memory.className == CreepConst.Creep_Miner)
    {
        return true;
    } else
    {
        return false;
    }
}

function isWorker(creep)
{
    if (creep.memory.class == CreepConst.Creep_Worker)
    {
        return true;
    } else
    {
        return false;
    }
}

function isGuard(creep)
{
    if (creep.memory.class == CreepConst.Creep_Guard)
    {
        return true;
    } else
    {
        return false;
    }
}

function isHealer(creep)
{
    if (creep.memory.class == CreepConst.Creep_Healer)
    {
        return true;
    } else
    {
        return false;
    }
}