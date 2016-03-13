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
        //���� ���� ��� ������� - ������
        if (sites.length > 0)
        {
            if (creep.build(sites[0]) == -9) {
                creep.moveTo(sites[0]);
            }
        } else
        //���� ������ ������� - ��������� ���-����������
        {

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

//����� ���������� � ����� extension � ��������
function selectNearestExtensionWithEnergy(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "extension" }});
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

function repairStructures(creep)
{
    var structures = creep.room.find(FIND_MY_STRUCTURES);

    if (creep.carry.energy > 0) {
        //���� ���� ��� ������ - �����
        if (structures.length > 0)
        {
            if (creep.build(structures[0]) == -9) {
                creep.moveTo(structures[0]);
            }
        } else
        //���� ������ ������� - ��������� ���-����������
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
    //���� ���� ��� ������� - ������
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