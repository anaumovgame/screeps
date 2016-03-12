var SpawnInit = require("Spawn_Init");
var SpawnController = require("Spawn_Controller");

module.exports.loop = function()
{
    Init();
    SpawnController();
}

function Init()
{
    console.log("---=== Init ===---");
    SpawnInit("S1");
    SpawnInit("S2");
}

//function