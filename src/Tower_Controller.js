module.exports = function()
{
//TODO: �Ѩ ����������!!!
    var controller = Game.controller;
    console.log(controller.room);
    var towers = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "tower" }});
    console.log(towers);
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