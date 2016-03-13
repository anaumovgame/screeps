module.exports = function(){
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        console.log(creep.body[0].type);
        //if (creep.memory.className)
    }
}
