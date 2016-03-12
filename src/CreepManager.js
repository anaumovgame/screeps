module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    var creeps = Game.creeps;

    
    for (var name in creeps)
    {
        console.log(name);
    }
};