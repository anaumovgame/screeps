var SpawnInit = require("Spawn_Init");
var SpawnController = require("Spawn_Controller");

module.exports.loop = function()
{
    Init();
    SpawnController();
}

function Init()
{
    //CONST
    var minerMax = 2;
    var workerMax = 1;
    var guardMax = 0;
    var healerMax = 0;

    //INIT
    console.log("------------============ INIT ============------------");
    SpawnInit("S1", minerMax, workerMax, guardMax, healerMax);
    SpawnInit("S2", minerMax, workerMax, guardMax, healerMax);
    console.log("------------========== INIT DONE ==========------------");
}