module.exports = function()
{
//TODO: �Ѩ ����������!!!
    var towers = Game.structures.find(FIND_MY_STRUCTURES, {filter: { structureType: "tower" }});
    var wall = selectLowHPWall(towers[0]);
}

//����� ����� � ������� ��
function selectLowHPWall(tower)
{
    var room = tower.room;
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