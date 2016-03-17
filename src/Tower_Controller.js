module.exports = function()
{
//TODO: �Ѩ ����������!!!
    for (var roomName in Game.rooms)
    {
        var room = Game.rooms[roomName];
        var towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }});
        var tower = towers[0]
        var wall = selectLowHPWall(room, tower);
        tower.repair(wall);
    }
}

//����� ����� � ������� ��
function selectLowHPWall(room, tower)
{
    var lowHitWall = null;
    var minWallHP = 999999999;


    //��������� ��� ����� � �������
    var walls = room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
    console.log(walls);
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