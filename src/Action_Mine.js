var FlagTypes = require("Flag_Types");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var nearestFlagName = selectNearestFlag(spawn, FlagTypes.ENERGY);
    console.log(nearestFlagName);
}

//Поиск ближайшего к спауну флага по типу
function selectNearestFlag(spawn, flag_type)
{
    var nearestFlagName;
    var wayLength = 999999;

    //Перебираю все флаги в комнате
    var flags = spawn.room.find(FIND_FLAGS);
    for (var flagNum in flags)
    {
        var flag = flags[flagNum];
        //Если флаг соответствует ресурсу
        if (flag.name.indexOf(flag_type) > -1) {
            //Измеряю путь
            var way = PathFinder.search(spawn.pos, flag.pos);
            //Сохраняю наименьший путь
            if (way.path.length < wayLength) {
                nearestFlagName = flag.name;
                wayLength = way.path.length;
            }
        }
    }

    return nearestFlagName;
}