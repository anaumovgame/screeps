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
        var path = PathFinder.search(creep.pos)
    }

    return flagName;
}