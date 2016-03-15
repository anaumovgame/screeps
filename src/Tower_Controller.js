module.exports = function()
{
//TODO: ВСЁ ПЕРЕДЕЛАТЬ!!!
    var towers = Game.structures.find(FIND_MY_STRUCTURES, {filter: { structureType: "tower" }});
    var wall = selectLowHPWall(towers[0]);
}

//Поиск стены с меньшим ХП
function selectLowHPWall(tower)
{
    var room = tower.room;
    var lowHitWall;
    var minWallHP = 999999999;


    //Перебираю все флаги в комнате
    var walls = room.find(FIND_MY_STRUCTURES, {filter: { structureType: "wall" }});
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