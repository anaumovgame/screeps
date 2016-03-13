var CreepConst = require("Creep_Const");
var CreepClasses = require("Creep_Classes");

module.exports = function(){
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];

        //ќпредел€ю текущее сост€ние body крипа
        var bodyParts = [];
        for (var bodyPart in creep.body)
        {
            bodyParts.push(creep.body[bodyPart].type);
        }
        console.log(creepName + " : " + bodyParts);

        //ќпредел€ю каким должно быть тело крипа
        var finalBody = CreepClasses
    }
}
