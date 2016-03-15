module.exports = function()
{
//TODO: ВСЁ ПЕРЕДЕЛАТЬ!!!
    var creep = Game.creeps[0];
    var towers = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: "tower" }});
    //var wall = selectLowHPWall(Game.rooms[creep.room], towers[0]);
}

//Поиск стены с меньшим ХП
function selectLowHPWall(room, tower)
{
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