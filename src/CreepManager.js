module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    var creeps = Game.creeps.filter(null);

    for (var name in creeps)
    {
        console.log(name);
    }
};