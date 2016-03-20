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

//������ ������ ��� ������
function harvestUnderFlag(creep, flag)
{
    //���� ����� - ��������� ������, ���� �����
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
    //���� �������� ��� - ��� ������
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
    //���� ����� �� ����� - ���� � �������
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

//����� ���������� � ������ Tower
function selectNearestEmptyTower(spawn)
{
    var nearestTower = null;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var towers = spawn.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }});
    for (var towerNum in towers) {
        var tower = towers[towerNum];

        //���� � ��������� ���� �����
        if (tower.energy < tower.energyCapacity) {
            //������� ����
            var way = PathFinder.search(spawn.pos, tower.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestTower = tower;
                wayLength = way.path.length;
            }
        }
    }

    return nearestTower;
}

//����� ���������� � ������ extension
function selectNearestEmptyExtension(spawn)
{
    var nearestExtension = null;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = spawn.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //���� � ��������� ���� �����
        if (extension.energy < extension.energyCapacity) {
            //������� ����
            var way = PathFinder.search(spawn.pos, extension.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestExtension = extension;
                wayLength = way.path.length;
            }
        }
    }

    return nearestExtension;
}

//����� ���������� � ������ container
function selectNearestEmptyContainer(spawn)
{
    var nearestContainer = null;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var containers = spawn.room.find(FIND_STRUCTURES, {filter: { structureType: "container" }});
    for (var containerNum in containers) {
        var container = containers[containerNum];

        //���� � ��������� ���� �����
        if (_.sum(container.store) < container.storeCapacity) {
            //������� ����
            var way = PathFinder.search(spawn.pos, container.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestContainer = container;
                wayLength = way.path.length;
            }
        }
    }

    return nearestContainer;
}

//����� ���������� � ������ ����� �� ����
function selectNearestFlag(spawn, flag_type)
{
    var nearestFlag;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var flags = spawn.room.find(FIND_FLAGS);
    for (var flagNum in flags)
    {
        var flag = flags[flagNum];
        //���� ���� ������������� �������
        if (flag.name.indexOf(flag_type) > -1) {
            //������� ����
            var way = PathFinder.search(spawn.pos, flag.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestFlag = flag;
                wayLength = way.path.length;
            }
        }
    }

    return nearestFlag;
}

//����� ��������� � ������ ��������� �������
function selectNearestFreeEnergy(spawn)
{
    var nearestEnergy = null;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var energies = spawn.room.find(FIND_DROPPED_RESOURCES);
    for (var energyNum in energies)
    {
        var energy = energies[energyNum];
        //���� ���� ������������� �������
        //if (energy.name.indexOf(flag_type) > -1) {
            //������� ����
            var way = PathFinder.search(spawn.pos, energy.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestEnergy = energy;
                wayLength = way.path.length;
            }
        //}
    }

    return nearestEnergy;
}