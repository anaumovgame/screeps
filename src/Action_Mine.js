var FlagTypes = require("Flag_Types");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var nearestFlagName = selectNearestFlag(spawn, FlagTypes.ENERGY);
    console.log(nearestFlagName);
}

//����� ���������� � ������ ����� �� ����
function selectNearestFlag(spawn, flag_type)
{
    var nearestFlagName;
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
                nearestFlagName = flag.name;
                wayLength = way.path.length;
            }
        }
    }

    return nearestFlagName;
}