var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);

    if (creep.carry.energy > 0) {
        if (creep.build(sites[0]) == -9) {
            creep.moveTo(sites[0]);
        }
    } else
    {
        var minerCount = 0;
        for (var name in Game.creeps)
        {
            if Game.creeps[name].memory.className = Creep.
        }
        

        if (spawn.transferEnergy(creep) == -9) {
            creep.moveTo(spawn);
        }
    }
}