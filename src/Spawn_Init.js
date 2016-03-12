module.exports = function(spawnName, workerMax, builderMax, guardMax)
{
//    if (Game.spawns[spawnName].memory.isInit != true)
    {
        console.log("Spawn init: " + spawnName + " : Population : " + workerMax + ", " + builderMax + ", " + guardMax);

        Game.spawns[spawnName].memory.workerMax = workerMax;
        Game.spawns[spawnName].memory.builderMax = builderMax;
        Game.spawns[spawnName].memory.guardMax = guardMax;

        Game.spawns[spawnName].memory.isInit = true;
    }
}