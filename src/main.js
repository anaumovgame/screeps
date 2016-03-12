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