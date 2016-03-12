var ConstInit = require("Const_Init");
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
    var minerMax = ConstInit.minerMax;
    var workerMax = ConstInit.workerMax;
    var guardMax = ConstInit.guardMax;
    var healerMax = ConstInit.healerMax;

    //INIT
    console.log("------------============ INIT ============------------");
    SpawnInit("S1", minerMax, workerMax, guardMax, healerMax);
    SpawnInit("S2", minerMax, workerMax, guardMax, healerMax);
    console.log("------------========== INIT DONE ==========------------");
}