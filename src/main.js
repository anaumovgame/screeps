var SpawnController = require("SpawnController");

module.exports.loop = function()
{
    InitMemory();
    SpawnController();
}

function InitMemory()
{
    console.log(Memory.isInit);
    if (Memory.isInit == false)
    {
        Memory.isInit = true;
    }
}