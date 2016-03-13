var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);

    if (creep.carry.energy > 0) {
        //���� ���� ��� ������� - ������
        if (sites.length > 0)
        {
            if (creep.build(sites[0]) == -9) {
                creep.moveTo(sites[0]);
            }
        } else
        //���� ������ ������� - ��������� ���-����������
        {
            var roomController = creep.room.controller;
            if (creep.upgradeController(roomController) == -9) {
                creep.moveTo(roomController);
            }
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
            if (spawn.transferEnergy(creep) == -9) {
                creep.moveTo(spawn);
            }
        }
    }
}

//����� ���������� � ����� extension
function selectNearestExtension(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "extension" }});
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