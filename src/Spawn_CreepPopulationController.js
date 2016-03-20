var CreepConst = require("Creep_Const");
var CreepClasses = require("Creep_Classes");
var SpawnConst = require("Spawn_Const");

module.exports = function(spawnName)
{
    //console.log("Manage population spawn: " + spawnName);
    var population = getSpawnPopulation(spawnName);
    reproducePopulation(spawnName, population);
}

function reproducePopulation(spawnName, population)
{
    if (population.minerCount < Game.spawns[spawnName].memory.minerMax)
    {
        createCreep(spawnName, CreepConst.Creep_Miner);
    } else
    if (population.workerCount < Game.spawns[spawnName].memory.workerMax)
    {
        createCreep(spawnName, CreepConst.Creep_Worker);
    }
}

function createCreep(spawnName, className)
{
    var creepClass = CreepClasses[className];
    var spawn = Game.spawns[spawnName];
    //ќпредел€ю какого крипа создавать в зависимости от возможностей спавнера
    var spawnMaxEnergy = getSpawnMaxCapacity(spawn);
    var bodyNum = getBodyNum(spawnMaxEnergy);
    var body = creepClass.body[bodyNum];
    var creepName = spawn.createCreep(body, null, {className : creepClass.className, spawnName : spawnName, actionName : creepClass.actionName});
    //var creepName = Game.spawns[spawnName].createCreep(/*creepClass.body*/[WORK, CARRY, MOVE], null, {className : creepClass.className, spawnName : spawnName, actionName : creepClass.actionName});
    if (_.isString(creepName)) {
        console.log("Spawn : " + spawnName + " : Create creep : " + className );
    }
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

function getSpawnMaxCapacity(spawn)
{
    //ѕеребираю все флаги в комнате
    var extensions = spawn.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    var maxCapacity = spawn.energyCapacity;
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];
        maxCapacity += extension.energyCapacity;
    }
    return maxCapacity;
}

function getBodyNum(maxCapacity)
{
    switch (maxCapacity) {
        case 300:
            return 0;
        case 350:
            return 1;
        case 400:
            return 2;
        case 450:
            return 3;
        case 500:
            return 4;
        case 550:
            return 5;

        default:
            console.log("def");
            return 5;
    }
}