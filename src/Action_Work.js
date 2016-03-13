var FlagTypes = require("Flag_Types");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
    console.log(sites[0]);
    if (creep.carry.energy > 0) {
        if (creep.build(sites[0]) == -9) {
            creep.moveTo(sites[0]);
        }
    } else
    {
        if (spawn.transferEnergy(creep) == -9) {
            creep.moveTo(spawn);
        }
    }
}