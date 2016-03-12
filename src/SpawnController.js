var CreepPopulationController = require("CreepPopulationController");

module.exports = function(test)
{
    for (var name in Game.spawns)
    {
        CreepPopulationController(name);
    }
}