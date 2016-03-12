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
}

SetDefaultPopulation : function(spawnName)
{
    var workerMax = 2;
    var builderMax = 1;
    var guardMax = 0;

    SetPopulation(spawnName, workerMax, builderMax, guardMax);
}

SetPopulation : function(spawnName, workerMax, builderMax, guardMax)
{
    console.log(spawnName + " : SetPopulation : " + workerMax + ", " + builderMax + ", " + guardMax);

    Game.spawns[spawnName].memory.workerMax = workerMax;
    Game.spawns[spawnName].memory.builderMax = builderMax;
    Game.spawns[spawnName].memory.guardMax = guardMax;
}