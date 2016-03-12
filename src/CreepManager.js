module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    creeps = Game.creeps.filter(isNamez);

    for (var name in creeps)
    {
        console.log(name);
    }
}

function isNamez(value)
{
    return true;
}