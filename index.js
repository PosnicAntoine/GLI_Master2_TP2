var generator = require('./playerGenerator.js');
var utils = require('./playerUtils.js');
var Player = require('./Player.js');

var name = "TheName";
var attack = 15;
var defense = 5;

//var p1 = generator.playerGenerator("Goliath", 30, 1);
//var p2 = generator.playerGenerator("Dave", 16, 10);

var p1 = new Player.Player("Goliath", 30,1);
var p2 = new Player.Player("Dave", 16,10);
var p3 = new Player.P2W("David",16,10);

p1.displayPlayerInfo();
p2.displayPlayerInfo();

console.log("Ratio de "+p1.name+" :"+utils.getMyPlayerRatio(p1,0));
console.log("Ratio de "+p2.name+" :"+utils.getMyPlayerRatio(p2,9));

p1.fight(p3);
