var SpawnConst = require("Spawn_Const");
var SpawnInit = require("Spawn_Init");
var SpawnController = require("Spawn_Controller");
var ActionDo = require("Action_Do");

module.exports.loop = function()
{
    asd.prototype.
    Init();
    //SpawnController();
}

function Init()
{
    //CONST
    var minerMax = SpawnConst.minerMax;
    var workerMax = SpawnConst.workerMax;
    var guardMax = SpawnConst.guardMax;
    var healerMax = SpawnConst.healerMax;

    //INIT
    console.log("------------============ INIT ============------------");

    //Spawn init
    SpawnInit("S1", minerMax, workerMax, guardMax, healerMax);
    SpawnInit("S2", minerMax, workerMax, guardMax, healerMax);

    //Prototype init
    Creep.prototype.action = function

    console.log("------------========== INIT DONE ==========------------");
}