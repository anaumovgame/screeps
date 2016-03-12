var CreepPopulationController = require("Spawn_CreepPopulationController");
var SpawnController = require("Spawn_Controller");

module.exports.loop = function()
{
    Init();
    SpawnController();
}

function Init()
{
    console.log("---=== Init ===---");
    CreepPopulationController.SetDefaultPopulation("S1");
}