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
    var creepName = Game.spawns[spawnName].createCreep(creepClass.body, null, {className : creepClass.className, spawnName : spawnName, actionName : creepClass.actionName});
    console.log("result: " + creepName);
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
            if (isClassName(creep, CreepConst.Creep_Miner)) {
                minerCount += 1;
            } else
            if (isClassName(creep, CreepConst.Creep_Worker)) {
                workerCount += 1;
            } else
            if (isClassName(creep, CreepConst.Creep_Guard)) {
                guardCount += 1;
            } else
            if (isClassName(creep, CreepConst.Creep_Healer)) {
                healerCount += 1;
            }
        }
    }

    return {
        minerCount : minerCount,
        workerCount : workerCount,
        guardCount : guardCount,
        healerCount : healerCount
    };
}

function isClassName(creep, className)
{
    if (creep.memory.className == className)
    {
        return true;
    } else
    {
        return false;
    }
}