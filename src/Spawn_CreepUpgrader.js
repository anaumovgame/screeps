module.exports = function(){
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        console.log(creep.body);
        //if (creep.memory.className)
    }
}
