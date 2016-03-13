var FlagTypes = require("Flag_Types");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var nearestFlag = selectNearestFlag(spawn, FlagTypes.ENERGY);
    if (nearestFlag) {
        if (creep.carry.energy < creep.carryCapacity) {
            harvestUnderFlag(creep, nearestFlag);
        } else
        {
            deliverResource(creep);
        }
    }
}

//������ ������ ��� ������
function harvestUnderFlag(creep, flag)
{
    var enegrySource = creep.room.find(FIND_SOURCES, {filter: {pos: flag.pos}})[0];
    if (creep.harvest(enegrySource) == -9) {
        creep.moveTo(enegrySource);
    }
}

function deliverResource(creep)
{
    var spawn = Game.spawns[creep.memory.spawnName];
    //���� ����� �� ����� - ���� � �������
    if (spawn.energy < spawn.energyCapacity) {
        if (creep.transferEnergy(spawn) == -9) {
            creep.moveTo(spawn);
        }
    } else
    //���� ����� �����, �� ���� ��������� � ���� ��������� ���������
    {
        findNearestExtension(creep);
    }
}

function findNearestExtension(creep)
{
    var spawn = Game.spawns[creep.memory.spawnName];
    var nearestExtensions = selectNearestExtension(spawn)
}

//����� ���������� � ������ extension
function selectNearestExtension(spawn)
{
    var nearestExtension;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = spawn.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "extension" }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //������� ����
        var way = PathFinder.search(spawn.pos, extension.pos);
        //�������� ���������� ����
        if (way.path.length < wayLength) {
            nearestExtension = extension;
            wayLength = way.path.length;
        }
    }

    return nearestExtension;
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