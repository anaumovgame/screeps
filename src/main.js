var SpawnController = require("Spawn_Controller");

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
    var workerMax = 2;
    var builderMax = 1;
    var guardMax = 0;


}

function SetPopulation(spawnName, workerMax, builderMax, guardMax)
{
    console.log(spawnName + " : SetPopulation : " + workerMax + ", " + builderMax + ", " + guardMax);

    Game.spawns[spawnName].memory.workerMax = 2;
    Game.spawns[spawnName].memory.builderMax = 1;
    Game.spawns[spawnName].memory.guardMax = 0;
}