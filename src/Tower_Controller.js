module.exports = function()
{
//TODO: �Ѩ ����������!!!

}

//����� ����� � ������� ��
function selectNearestExtensionWithEnergy(tower)
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