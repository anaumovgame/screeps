var SpawnController = require("SpawnController");

module.exports.loop = function()
{
    //InitMemory();
    SpawnController();
}

function InitMemory()
{
    console.log("Init Memory.");
    Game.spawns.S1.memory.wkMax
}

function SetDefaultPopulation(spawnName)
{

}