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
    var flagName = null;
    var wayLength = 999999;

    var flags = spawn.room.find(FIND_FLAGS);
    for (var flagName in flags)
    {
        var flag = flags[flagName];
        var way = PathFinder.search(spawn.pos, flag.pos);

        if (way.path.length < wayLength)
        {
            flagName = flag.name;
            wayLength = way.path.length;
        }
    }

    return flagName;
}