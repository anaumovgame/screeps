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
    var workerMax = 2;
    var builderMax = 1;
    var guardMax = 0;

    //INIT
    console.log("------------============ INIT ============------------");
    SpawnInit("S1", workerMax, builderMax, guardMax);
    SpawnInit("S2", workerMax, builderMax, guardMax);
    console.log("------------========== INIT DONE ==========------------");
}