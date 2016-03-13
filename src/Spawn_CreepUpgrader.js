var CreepConst = require("Creep_Const");
var CreepClasses = require("Creep_Classes");

module.exports = function(){
    for (var creepName in Game.creeps)
    {
        var creep = Game.creeps[creepName];

        //��������� ������� �������� body �����
        var bodyParts = [];
        for (var bodyPart in creep.body)
        {
            bodyParts.push(creep.body[bodyPart].type);
        }
        console.log("1 - " + creepName + " : " + bodyParts);

        //��������� ����� ������ ���� ���� �����
        var finalBody = CreepClasses[creep.memory.className].body;
        console.log("2 - " + creepName + " : " + finalBody);

        //��������� ����� ������ ���� �� �������
        for (var bodyPart in bodyParts)
        {
            var elemIndex = finalBody.indexOf(bodyPart);
            console.log(elemIndex);
            if (elemIndex > -1) {
                finalBody = finalBody.slice(elemIndex, 1);
            }
        }
        console.log("3 - " + creepName + " : " + finalBody);
    }
}
