module.exports = function(){
    for (var creepName in Game.creeps)
    {
        creep = Game.creeps[creepName];
        console.log(creep.body);
        //if (creep.memory.className)
    }
}
