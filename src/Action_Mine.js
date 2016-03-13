module.exports = function(creep)
{
    //console.log("Mine");
    var flags = creep.room.find(FIND_FLAGS);



    var path = PathFinder.search(creep.pos)
}

function selectNearestFlag(resource_type)
{
    var creepSpawnName = creep.memory.spawnName;
    var spawn = Game.spawns[creepSpawnName];

    for (var flagName in flags)
    {

    }

    return flagName;
}