var FlagTypes = require("Flag_Types");

module.exports = function(creep)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];
    var nearestFlagName = selectNearestFlag(spawn, FlagTypes.ENERGY);
}

//Поиск ближайшего к спауну флага по типу
function selectNearestFlag(spawn, flag_type)
{
    var flagName;
    var wayLength = 999999;

    var flags = spawn.room.find(FIND_FLAGS);
    for (var flagName in flags)
    {
        var flag = Game.flags[flagName];
        var path = PathFinder.search(spawn.pos, flag.pos);
        console.log(path);
    }

    return flagName;
}