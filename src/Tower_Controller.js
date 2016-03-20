module.exports = function()
{
//TODO: �Ѩ ����������!!!
    for (var roomName in Game.rooms)
    {
        var room = Game.rooms[roomName];
        var towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }});
        var tower = towers[0]

        var lowHitsStructure = selectLowHPStructure(room, tower);
        if (lowHitsStructure != null)
        {
            tower.repair(lowHitsStructure);
        } else {
            var wall = selectLowHPWall(room, tower);
            tower.repair(wall);
        }
    }
}

//����� ���������, ������� ���� ������
function selectLowHPStructure(room, tower)
{
    var lowHitStructure = null;
    var minStructureHits = 999999999;


    //��������� ��� ����� � �������
    var structures = room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
    for (var structureNum in structures) {
        var structure = structures[structureNum];
        //������� HP �����
        var structureHits = structure.hits;
        //�������� ����� � ���������� ��
        if ( (structure.hits < structure.hitsMax - 200) && (structureHits < minStructureHits)) {
            lowHitStructure = structure;
            minStructureHits = structureHits;
        }
    }

    return lowHitStructure;
}


//����� ����� � ������� ��
function selectLowHPWall(room, tower)
{
    var lowHitWall = null;
    var minWallHP = 999999999;


    //��������� ��� ����� � �������
    var walls = room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
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