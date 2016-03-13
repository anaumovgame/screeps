var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];





    if (creep.carry.energy > 0) {
        if (repairStructures() == 1)
        {

        } else
        if (buildStructures() == 1)
        {

        }
    }

        var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
        //Если есть что строить - строим
        if (sites.length > 0)
        {
            if (creep.build(sites[0]) == -9) {
                creep.moveTo(sites[0]);
            }
        } else
        //Если нечего строить - апргейдим рум-контроллер
        {

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

        var nearestExtension = selectNearestExtensionWithEnergy(creep);
        if (nearestExtension)
        {
            if (nearestExtension.transferEnergy(creep) == -9) {
                creep.moveTo(nearestExtension);
            }
        } else {
            if (minerCount >= Game.spawns[creep.memory.spawnName].memory.minerMax) {
                if (spawn.transferEnergy(creep) == -9) {
                    creep.moveTo(spawn);
                }
            }
        }
    }
}

//Поиск ближайшего к крипу extension с энергией
function selectNearestExtensionWithEnergy(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "extension" }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //Если в хранилище есть место
        if (extension.energy > 0) {
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

function repairStructures(creep)
{
    var structures = creep.room.find(FIND_MY_STRUCTURES);

    if (creep.carry.energy > 0) {
        //Если есть что чинить - чиним
        if (structures.length > 0)
        {
            if (creep.build(structures[0]) == -9) {
                creep.moveTo(structures[0]);
            }
        } else
        //Если нечего строить - апргейдим рум-контроллер
        {
            var roomController = creep.room.controller;
            if (creep.upgradeController(roomController) == -9) {
                creep.moveTo(roomController);
            }
        }
}

function buildStructures(creep)
{
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
    //Если есть что строить - строим
    if (sites.length > 0)
    {
        if (creep.build(sites[0]) == -9) {
            creep.moveTo(sites[0]);
        }
    }
}

    function upgradeRoomController(creep){
        var roomController = creep.room.controller;
        if (creep.upgradeController(roomController) == -9) {
            creep.moveTo(roomController);
        }
    }