var ActionMine = require("Action_Mine");
var ActionConst = require("Action_Const");
var ActionList = require("Action_List");

module.exports = function(creep) {
    console.log("Do: " + creep.memory.actionName);
    switch (creep.memory.actionName){
        case ActionConst.Action_Mine:
            Action
            ActionMine(creep);
            break;
    }
}
