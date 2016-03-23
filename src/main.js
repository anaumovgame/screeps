var SpawnConst = require("Spawn_Const");
var SpawnInit = require("Spawn_Init");
var SpawnController = require("Spawn_Controller");
var CreepController = require("Creep_Controller");
var TowerController = require("Tower_Controller");

module.exports.loop = function()
{
    Init();
    SpawnController();
    CreepController();
    TowerController();
}

function Init()
{
    //CONST
    var minerMax = SpawnConst.minerMax;
    var workerMax = SpawnConst.workerMax;
    var serviceMax = SpawnConst.serviceMax;
    var guardMax = SpawnConst.guardMax;
    var healerMax = SpawnConst.healerMax;

    //INIT
    //console.log("------------============ INIT ============------------");

    //Spawn init
    SpawnInit("S1", 3, 2, 1, 0, 0);
    //SpawnInit("S2", minerMax, workerMax, guardMax, healerMax);

    //console.log("------------========== INIT DONE ==========------------");
}