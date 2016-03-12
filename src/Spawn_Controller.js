var CreepPopulationController = require("Spawn_CreepPopulationController");

module.exports = function()
{
    for (var spawnName in Game.spawns)
    {
        CreepPopulationController(spawnName);
    }
}