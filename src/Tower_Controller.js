module.exports = function()
{
//TODO: �Ѩ ����������!!!
    var creep = Game.creeps[0];
    var towers = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "tower" }});
    //var wall = selectLowHPWall(Game.rooms[creep.room], towers[0]);
}

//����� ����� � ������� ��
function selectLowHPWall(room, tower)
{
    var lowHitWall;
    var minWallHP = 999999999;


    //��������� ��� ����� � �������
    var walls = room.find(FIND_MY_STRUCTURES, {filter: { structureType: "wall" }});
    for (var wallNum in walls) {
        var wall = walls[wallNum];
            //������� HP �����
            var wallHP = wall.hits;
            //�������� ����� � ���������� ��
            if (wallHP < minWallHP) {
                lowHitWall = wall;
                minWallHP = wallHP;
            }
        }

    return lowHitWall;
}