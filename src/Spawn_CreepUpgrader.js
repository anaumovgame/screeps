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
        console.log(creepName + " : " + bodyParts);

        //��������� ����� ������ ���� ���� �����
        var finalBody = CreepClasses
    }
}
