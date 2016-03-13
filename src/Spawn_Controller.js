var CreepPopulationController = require("Spawn_CreepPopulationController");
var CreepUpgrader = require("Spawn_CreepUpgrader");

module.exports = function()
{
    for (var spawnName in Game.spawns)
    {
        CreepPopulationController(spawnName);
        //CreepUpgrader(spawnName); //Недописан, т.к не спавнер апгрейдит крипов
    }
}