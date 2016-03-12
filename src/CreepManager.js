module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    creeps = Game.creeps.filter(isName);

    for (var name in creeps)
    {
        console.log(name);
    }
}

function isName(value)
{
    return true;
}