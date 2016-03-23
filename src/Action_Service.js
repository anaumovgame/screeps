var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep) {
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];

}

//Поиск ближайшего к спауну extension
function selectNearestEmptyExtension(spawn)
{
    var nearestExtension = null;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var extensions = spawn.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //Если в хранилище есть место
        if (extension.energy < extension.energyCapacity) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, extension.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestExtension = extension;
                wayLength = way.path.length;
            }
        }
    }

    return nearestExtension;
}

//Поиск ближайшего к крипу container который можно заполнить энергией
function selectNearestContainerWithEnergy(creep)
{
    var nearestContainer;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var containers = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var containerNum in containers) {
        var container = containers[containerNum];

        //Если в хранилище есть энергия
        if (extension.energy < extension.energyCapacity) {
            //Измеряю путь
            var way = PathFinder.search(creep.pos, container.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestContainer = container;
                wayLength = way.path.length;
            }
        }
    }

    return nearestContainer;
}