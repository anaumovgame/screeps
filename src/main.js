var SpawnController = require("SpawnController");

module.exports.loop = function()
{
    InitMemory();
    SpawnController();
}

function InitMemory()
{
    console.log("Init Memory.");
    SetDefaultPopulation("S1");
    SetDefaultPopulation("S2");
}

function SetDefaultPopulation(spawnName)
{
    Game.spawns[spawnName].memory.workerMax = 2;
    Game.spawns[spawnName].memory.builderMax = 1;
    Game.spawns[spawnName].memory.guardMax = 0;
}