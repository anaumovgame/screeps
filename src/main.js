var SpawnController = require("SpawnController");

module.exports.loop = function()
{
    InitMemory();
    SpawnController();
}

function InitMemory()
{
    if (Memory.getAttribute("isInit") == false)
    {
        Memory.setAttribute("isInit", true);
    }
}