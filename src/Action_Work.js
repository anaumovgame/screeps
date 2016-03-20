var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];

    if (creep.carry.energy > 0) {
       /* if (repairStructures(creep) == 1)
        {

        } else*/
        if (buildStructures(creep) == 1)
        {

        } else {
            upgradeRoomController(creep);
        }
    } else
    {
        //ToDo: ������ ��� ���������: ���� Miner ������ �����, �� �� ������ �������
        var minerCount = 0;
        for (var name in Game.creeps)
        {
            if (Game.creeps[name].memory.className == CreepConst.Creep_Miner)
            {
                minerCount++;
            }
        }

        if (minerCount >= Game.spawns[creep.memory.spawnName].memory.minerMax) {
            var nearestContainer = selectNearestContainerWithEnergy(creep);
            if (nearestContainer) {
                if (nearestContainer.transferEnergy(creep) == -9) {
                    creep.moveTo(nearestContainer);
                }
            } else {
                var nearestExtension = selectNearestExtensionWithEnergy(creep);
                if (nearestExtension) {
                    if (nearestExtension.transferEnergy(creep) == -9) {
                        creep.moveTo(nearestExtension);
                    }
                } else {
                    if (spawn.transferEnergy(creep) == -9) {
                        creep.moveTo(spawn);
                    }
                }
            }
        }
    }
}

//����� ���������� � ����� container � ��������
function selectNearestContainerWithEnergy(creep)
{
    var nearestContainer;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var containers = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_CONTAINER }});
    console.log(containers);
    for (var containerNum in containers) {
        var container = containers[containerNum];


        //���� � ��������� ���� �����
        if (container.energy > 0) {
            //������� ����
            var way = PathFinder.search(creep.pos, container.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestContainer = container;
                wayLength = way.path.length;
            }
        }
    }

    return nearestContainer;
}

//����� ���������� � ����� extension � ��������
function selectNearestExtensionWithEnergy(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //���� � ��������� ���� �����
        if (extension.energy > 0) {
            //������� ����
            var way = PathFinder.search(creep.pos, extension.pos);
            //�������� ���������� ����
            if (way.path.length < wayLength) {
                nearestExtension = extension;
                wayLength = way.path.length;
            }
        }
    }

    return nearestExtension;
}

function repairStructures(creep) {
    var structures = creep.room.find(FIND_MY_STRUCTURES);

    if (creep.carry.energy > 0) {
        //���� ���� ��� ������ - �����
        if (structures.length > 0) {
            if (structures[0].ticksToLive)
            if (creep.build(structures[0]) == -9) {
                creep.moveTo(structures[0]);
            }
            return 1;
        } else {
            return 0;
        }
    }
}

function buildStructures(creep)
{
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
    //���� ���� ��� ������� - ������
    if (sites.length > 0)
    {
        if (creep.build(sites[0]) == -9) {
            creep.moveTo(sites[0]);
        }
        return 1;
    } else {
        return 0;
    }
}

function upgradeRoomController(creep) {
    var roomController = creep.room.controller;
    if (creep.upgradeController(roomController) == -9) {
        creep.moveTo(roomController);
    }
    return 1;
}