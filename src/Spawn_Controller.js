var CreepPopulationController = require("Spawn_CreepPopulationController");
var CreepUpgrader = require("Spawn_CreepUpgrader");
var CreepRenewer = require("Spawn_CreepRenewer");

module.exports = function()
{
    for (var spawnName in Game.spawns)
    {
        CreepPopulationController(spawnName);
        //CreepUpgrader(spawnName); //���������, �.� �� ������� ��������� ������
        //CreepRenewer(spawnName); 
    }
}