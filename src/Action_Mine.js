module.exports = function(creep)
{
    //console.log("Mine");
    var flags = creep.room.find(FIND_FLAGS);

    for (var flagName in flags)
    {

    }

    var path = PathFinder.search(creep.pos)
}

function selectNearestFlag()
{
    return flagName;
}