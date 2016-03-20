var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var nearestFlag = selectNearestFlag(spawn, FlagTypes.ENERGY);
    if (nearestFlag) {
        if (creep.memory.state == CreepConst.Creep_State_Harvest) {
            harvestUnderFlag(creep, nearestFlag);
        } else
        if (creep.memory.state == CreepConst.Creep_State_Deliver) {
        {
            deliverResource(creep);
        }
    }
}

//Копать ресурс под флагом
function harvestUnderFlag(creep, flag)
{
    //Если полон - прекращаю копать, несу домой
    if (creep.carry.energy == creep.carryCapacity) {
        creep.memory.state = CreepConst.Creep_State_Deliver;
        return;
    }

    var spawn = Game.spawns[creep.spawnName];

    var enegrySource;
   /* var freeEnergy = selectNearestFreeEnergy(spawn);
    if (freeEnergy != null)
    {
        enegrySource = freeEnergy;
    } else*/
    {
        enegrySource = creep.room.find(FIND_SOURCES, {filter: {pos: flag.pos}})[0];
    }

    if (creep.harvest(enegrySource) == -9) {
        creep.moveTo(enegrySource);
    }
}

function deliverResource(creep)
{
    //Если ресурсов нет - иду копать
    if (creep.carry.energy == 0) {
        creep.memory.state = CreepConst.Creep_State_Harvest;
        return;
    }

    var spawn = Game.spawns[creep.memory.spawnName];
    /*var storage = creep.room.storage;
    if (storage.energy < storage.energyCapacity) {
        if (creep.transferEnergy(storage) == -9) {
            creep.moveTo(storage);
        }
    }*/
    //Если спавн не полон - несём в спавнер
    if (spawn.energy < spawn.energyCapacity) {
        if (creep.transferEnergy(spawn) == -9) {
            creep.moveTo(spawn);
        }
    } else {
        var nearestExtensions = selectNearestEmptyExtension(spawn);
        if (nearestExtensions != null) {
            if (creep.transferEnergy(nearestExtensions) == -9) {
                creep.moveTo(nearestExtensions);
            }
        } else {
            var nearestContainer = selectNearestEmptyContainer(spawn);
            if (nearestContainer != null) {
                if (creep.transferEnergy(nearestContainer) == -9) {
                    creep.moveTo(nearestContainer);
                }
            } else {
                var nearestTower = selectNearestEmptyTower(spawn);
                if (nearestTower != null) {
                    if (creep.transferEnergy(nearestTower) == -9) {
                        creep.moveTo(nearestTower);
                    }
                }
            }
        }
    }
}

//Поиск ближайшего к спауну Tower
function selectNearestEmptyTower(spawn)
{
    var nearestTower = null;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var towers = spawn.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }});
    for (var towerNum in towers) {
        var tower = towers[towerNum];

        //Если в хранилище есть место
        if (tower.energy < tower.energyCapacity) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, tower.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestTower = tower;
                wayLength = way.path.length;
            }
        }
    }

    return nearestTower;
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

//Поиск ближайшего к спауну container
function selectNearestEmptyContainer(spawn)
{
    var nearestContainer = null;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var containers = spawn.room.find(FIND_STRUCTURES, {filter: { structureType: "container" }});
    for (var containerNum in containers) {
        var container = containers[containerNum];

        //Если в хранилище есть место
        if (_.sum(container.store) < container.storeCapacity) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, container.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestContainer = container;
                wayLength = way.path.length;
            }
        }
    }

    return nearestContainer;
}

//Поиск ближайшего к спауну флага по типу
function selectNearestFlag(spawn, flag_type)
{
    var nearestFlag;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var flags = spawn.room.find(FIND_FLAGS);
    for (var flagNum in flags)
    {
        var flag = flags[flagNum];
        //Если флаг соответствует ресурсу
        if (flag.name.indexOf(flag_type) > -1) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, flag.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestFlag = flag;
                wayLength = way.path.length;
            }
        }
    }

    return nearestFlag;
}

//Поиск ближайшей к спавну свободной энергии
function selectNearestFreeEnergy(spawn)
{
    var nearestEnergy = null;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var energies = spawn.room.find(FIND_DROPPED_RESOURCES);
    for (var energyNum in energies)
    {
        var energy = energies[energyNum];
        //Если флаг соответствует ресурсу
        //if (energy.name.indexOf(flag_type) > -1) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, energy.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestEnergy = energy;
                wayLength = way.path.length;
            }
        //}
    }

    return nearestEnergy;
}