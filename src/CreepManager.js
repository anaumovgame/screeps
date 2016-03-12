module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    creeps = Game.creeps.filter({memory: {role: "wk"}}).value();

    for (var name in creeps)
    {
        console.log(name);
    }
};