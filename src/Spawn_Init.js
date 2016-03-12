module.exports = function(spawnName, workerMax, builderMax, guardMax)
{
    console.log("Spawn init: " + spawnName + " : Population : " + workerMax + ", " + builderMax + ", " + guardMax);

    Game.spawns[spawnName].memory.workerMax = workerMax;
    Game.spawns[spawnName].memory.builderMax = builderMax;
    Game.spawns[spawnName].memory.guardMax = guardMax;
}