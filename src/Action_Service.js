var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep) {
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var status = creep.memory.state;

    if (status == CreepConst.Creep_State_Charge)
    {
        charge(creep, spawn);
    } else if (status == CreepConst.Creep_State_Service)
    {
        service(creep, spawn);
    }
}

function charge(creep, spawn)
{
    if (creep.carry.energy > 0)
    {
        creep.memory.status = CreepConst.Creep_State_Service;
        creep.say("Service!");
        return;
    }

    var nearestContainer = selectNearestContainerWithEnergy(creep);
    if (nearestContainer) {
        if (nearestContainer.transfer(creep, RESOURCE_ENERGY) == -9) {
            creep.moveTo(nearestContainer);
        }
    }
}

function service(creep, spawn)
{
    if (creep.carry.energy == 0)
    {
        creep.memory.status = CreepConst.Creep_State_Charge;
        creep.say("Charge!");
        return;
    }

    //���� ����� �� ����� - ���� � �������
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
}

//����� ���������� � ����� extension ������� ����� ��������� ��������
function selectNearestExtensionWithoutEnergy(creep)
{
    var nearestExtension;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var extensions = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    for (var extensionNum in extensions) {
        var extension = extensions[extensionNum];

        //���� � ��������� ���� �������
        if (extension.energy < extension.energyCapacity) {
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

//����� ���������� � ����� container � ��������
function selectNearestContainerWithEnergy(creep)
{
    var nearestContainer;
    var wayLength = 999999;

    //��������� ��� ����� � �������
    var containers = creep.room.find(FIND_STRUCTURES, {filter: { structureType: "container" }});
    for (var containerNum in containers) {
        var container = containers[containerNum];

        //���� � ��������� ���� �������
        if (container.store.energy > 0) {
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