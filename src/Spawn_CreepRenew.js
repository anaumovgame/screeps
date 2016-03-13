var CreepClasses = require("Creep_Classes");

module.exports = function(spawnName){
    var spawn = Game.spawns[spawnName];
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        spawn.renewCreep(creep);
    }
}
