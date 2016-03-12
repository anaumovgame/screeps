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

}