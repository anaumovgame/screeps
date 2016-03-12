module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);

    for (var creepName in Game.creeps)
    {
        console.log(creepName);
    }
};