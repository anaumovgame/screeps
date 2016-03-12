var SpawnConst = require("Spawn_Const");
var SpawnInit = require("Spawn_Init");
var SpawnController = require("Spawn_Controller");

module.exports.loop = function()
{
    Object.defineProperties(Source.prototype, 'memory',
        enumerable : true,
        configurable : false,
        get : function() {},
    )
    //Memory.asd = function(){}.toSource();
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
    SpawnInit("S1", minerMax, workerMax, guardMax, healerMax);
    SpawnInit("S2", minerMax, workerMax, guardMax, healerMax);
    console.log("------------========== INIT DONE ==========------------");
}