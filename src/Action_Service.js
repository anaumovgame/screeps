var FlagTypes = require("Flag_Types");
var CreepConst = require("Creep_Const");

module.exports = function(creep) {
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];

    if (creep.carry.energy > 0) {
        var extension = selectNearestExtensionWithoutEnergy(creep);
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