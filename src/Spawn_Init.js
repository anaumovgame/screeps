module.exports = function(spawnName, minerMax, workerMax, guardMax, healerMax)
{
    if (Game.spawns[spawnName].memory.isInit != false)
    {
        console.log("Spawn init: " + spawnName + " : Population : " + minerMax + ", " + workerMax + ", " + guardMax + ", " + healerMax);

        Game.spawns[spawnName].memory.population.minerMax = minerMax;
        Game.spawns[spawnName].memory.population.workerMax = workerMax;
        Game.spawns[spawnName].memory.population.guardMax = guardMax;
        Game.spawns[spawnName].memory.population.healerMax = healerMax;

        Game.spawns[spawnName].memory.isInit = true;
    }
}