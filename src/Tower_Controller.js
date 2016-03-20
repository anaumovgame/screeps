module.exports = function()
{
//TODO: ВСЁ ПЕРЕДЕЛАТЬ!!!
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

//Поиск структуры, которую надо чинить
function selectLowHPStructure(room, tower)
{
    var lowHitStructure = null;
    var minStructureHits = 999999999;


    //Перебираю все флаги в комнате
    var structures = room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
    for (var structureNum in structures) {
        var structure = structures[structureNum];
        //Измеряю HP стены
        var structureHits = structure.hits;
        //Сохраняю башню с наименьшим ХП
        if ( (structure.hits < structure.hitsMax - 200) && (structureHits < minStructureHits)) {
            lowHitStructure = structure;
            minStructureHits = structureHits;
        }
    }

    return lowHitStructure;
}


//Поиск стены с меньшим ХП
function selectLowHPWall(room, tower)
{
    var lowHitWall = null;
    var minWallHP = 999999999;


    //Перебираю все флаги в комнате
    var walls = room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
    for (var wallNum in walls) {
        var wall = walls[wallNum];
            //Измеряю HP стены
            var wallHP = wall.hits;
            //Сохраняю башню с наименьшим ХП
            if (wallHP < minWallHP) {
                lowHitWall = wall;
                minWallHP = wallHP;
            }
        }

    return lowHitWall;
}