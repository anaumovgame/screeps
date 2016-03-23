var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep) {
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var status = creep.memory.status;

    if (creep.carry.energy > 0) {
        //Если спавн не полон - несём в спавнер
        if (spawn.energy < spawn.energyCapacity) {
            if (creep.transferEnergy(spawn) == -9) {
                creep.moveTo(spawn);
            }
        } else {
            var nearestExtensions = selectNearestExtensionWithoutEnergy(spawn);
            if (nearestExtensions != null) {
                if (creep.transferEnergy(nearestExtensions) == -9) {
                    creep.moveTo(nearestExtensions);
                }
            }
        }
    } else
    {
        var nearestContainer = selectNearestContainerWithEnergy(creep);
        if (nearestContainer) {
            if (nearestContainer.transfer(creep, RESOURCE_ENERGY) == -9) {
                creep.moveTo(nearestContainer);
            }
        }
    }
}



//Поиск ближайшего к крипу extension который можно заполнить энергией
function selectNearestExtensionWithoutEnergy(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var extensions = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //Если в хранилище есть энергия
        if (extension.energy < extension.energyCapacity) {
            //Измеряю путь
            var way = PathFinder.search(creep.pos, extension.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestExtension = extension;
                wayLength = way.path.length;
            }
        }
    }

    return nearestExtension;
}