module.exports = function(spawnName)
{

}

function SetDefaultPopulation(spawnName) {
    var workerMax = 2;
    var builderMax = 1;
    var guardMax = 0;

    SetPopulation(spawnName, workerMax, builderMax, guardMax);
}

function SetPopulation(spawnName, workerMax, builderMax, guardMax) {
    console.log(spawnName + " : SetPopulation : " + workerMax + ", " + builderMax + ", " + guardMax);

    Game.spawns[spawnName].memory.workerMax = workerMax;
    Game.spawns[spawnName].memory.builderMax = builderMax;
    Game.spawns[spawnName].memory.guardMax = guardMax;
}