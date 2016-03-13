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
        console.log("1 - " + creepName + " : " + bodyParts);

        //ќпредел€ю каким должно быть тело крипа
        var finalBody = CreepClasses[creep.memory.className].body;
        console.log("2 - " + creepName + " : " + finalBody);

        //ќпредел€ю каких частей тела не хватает
        for (var bodyPart in bodyParts)
        {
            var elemIndex = finalBody.indexOf(bodyPart);
            if (elemIndex > -1) {
                finalBody.slice(elemIndex);
            }
        }
        console.log("3 - " + creepName + " : " + finalBody);
    }
}
