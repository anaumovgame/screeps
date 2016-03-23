module.exports = function(spawnName, minerMax, workerMax, serviceMax, guardMax, healerMax)
{
    //if (Game.spawns[spawnName].memory.isInit != true)
    {
        //console.log("Spawn init: " + spawnName + " : Population : " + minerMax + ", " + workerMax + ", " + guardMax + ", " + healerMax);

        Game.spawns[spawnName].memory.minerMax = minerMax;
        Game.spawns[spawnName].memory.workerMax = workerMax;
        Game.spawns[spawnName].memory.serviceMax = serviceMax;
        Game.spawns[spawnName].memory.guardMax = guardMax;
        Game.spawns[spawnName].memory.healerMax = healerMax;

        Game.spawns[spawnName].memory.isInit = true;
    }
}