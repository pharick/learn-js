var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var json = JSON.stringify(team);
