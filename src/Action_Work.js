var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);

    if (creep.carry.energy > 0) {
        //Если есть что строить - строим
        if (sites.length > 0)
        {
            if (creep.build(sites[0]) == -9) {
                creep.moveTo(sites[0]);
            }
        } else
        //Если нечего строить - апргейдим рум-контроллер
        {
            var roomController = creep.room.find(FIND_STRUCTURES);//, {filter: {}});
            console.log(roomController.structureType);
            if (creep.upgradeController(roomController[0]) == -9) {
                creep.moveTo(roomController[0]);
            }
        }
    } else
    {
        //ToDo: Убрать или перенести: Если Miner меньше нормы, то не тырить энергию

        var minerCount = 0;
        for (var name in Game.creeps)
        {
            if (Game.creeps[name].memory.className == CreepConst.Creep_Miner)
            {
                minerCount++;
            }
        }

        if (minerCount == 4) {
            if (spawn.transferEnergy(creep) == -9) {
                creep.moveTo(spawn);
            }
        }
    }
}