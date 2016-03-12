module.exports = function(spawnName)
{
    console.log("Creep-manage spawn: " + spawnName);
    creeps = Game.creeps.filter(function(x) {
       if (x.spawnName = spawnName)
       {
            return true;
       } else
       {
           return false;
       };
    });
}