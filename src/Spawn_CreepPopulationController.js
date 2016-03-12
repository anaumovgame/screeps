module.exports = function(spawnName)
{
    console.log("Manage population spawn: " + spawnName);

    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        if (creep.memory.spawnName == spawnName)
        {
            console.log(spawnName + " : " + creepName);
        }
    }
}