var SpawnController = require("SpawnController");

module.exports.loop = function()
{
    InitMemory();
    SpawnController();
}

function InitMemory()
{
    if (Memory.isInit == false)
    {
        Memory.isInit = true;
    }
}