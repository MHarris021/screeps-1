Game.clearScoutFlags = function() {
  Game.getScoutFlags().forEach((flag) => {
    flag.remove();
  });
};

Game.getScoutFlags = function() {
  return Object.keys(Game.flags).filter(function(flagName) {
    return flagName.toLowerCase().indexOf('scout') !== -1;
  }).map(function(flagName) {
    return Game.flags[flagName];
  });
};