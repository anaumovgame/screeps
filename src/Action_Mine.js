module.exports = function(creep)
{
    //console.log("Mine");


}

function selectNearestFlag(resource_type)
{
    var flagName;
    var wayLength = 999999;

    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];

    var flags = creep.room.find(FIND_FLAGS);
    for (var flagName in flags)
    {
        var flag = Game.flags[flagName];
        var path = PathFinder.search(spawn.pos, fla)
    }

    return flagName;
}