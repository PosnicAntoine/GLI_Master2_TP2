/*
var utils = require('./playerUtils.js');

function Player(name,attack,defense)
{
	this.name = name;
	this.attack = attack;
	this.defense = defense;
	this.hp = 100;

}

function P2W(name,attack,defense)
{
	this.name = name;
	this.attack = attack*1.4;
	this.defense = defense;
	this.hp = 100;

}

Player.prototype.displayPlayerInfo = function() 
{
	console.log("My name is "+this.name+", I have "+this.attack+" attack, "+this.defense+" defense and "+this.hp+" health points.")
};

Player.prototype.fight = utils.fight;

P2W.prototype = Player.prototype;

module.exports = 
{
	Player,
	P2W
}
*/

var utils = require('./playerUtils.js');

class Player
{

	constructor(name,attack,defense)
	{
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.hp = 100;
	}

	displayPlayerInfo()
	{
		console.log("My name is "+this.name+", I have "+this.attack+" attack, "+this.defense+" defense and "+this.hp+" health points.");
	}

	fight(player2)
	{
		utils.fight.call(this,player2);
	}
}

class P2W extends Player
{

	constructor(name,attack,defense)
	{
		super(name,attack,defense);
		this.attack = attack*1.4;
	}
}

module.exports = 
{
	Player,
	P2W
}
