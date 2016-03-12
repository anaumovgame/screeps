var CreepPopulationController = require("Spawn_CreepPopulationController");

module.exports = function(test)
{
    for (var spawnName in Game.spawns)
    {
        CreepPopulationController(spawnName);
    }
}