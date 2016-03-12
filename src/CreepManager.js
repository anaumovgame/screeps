module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    creeps = Game.creeps.filter(function(x) { return x > 3;
    });

    for (var name in creeps)
    {
        console.log(name);
    }
}