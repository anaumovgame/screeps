module.exports = function(spawnName){
    var spawn = Game.spawns[spawnName];
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        if (spawn.renewCreep(creep))
        {
            console.log(creep.name + " : Renew()");
        }
    }
}
