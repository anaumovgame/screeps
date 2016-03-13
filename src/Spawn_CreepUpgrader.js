module.exports = function(){
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];
        var bodyParts = [];
        for (var bodyPart in creep.body)
        {
            bodyParts.push(bodyPart.type);
        }
        console.log(bodyParts);
    }
}
