module.exports = function()
{
//TODO: �Ѩ ����������!!!

}

//����� ����� � ������� ��
function selectNearestExtensionWithEnergy(creep)
{
    var lowHitWall;
    var wayLength = 999999999;

    //��������� ��� ����� � �������
    var walls = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "wall" }});
    for (var wallNum in walls) {
        var wall = walls[wallNum];
            //������� HP �����
            var wallHp = wall.hits;
            //�������� ����� � ���������� ��
            if (way.path.length < wayLength) {
                lowHitWall = wall;
                wayLength = way.path.length;
            }
        }
    }

    return lowHitWall;
}