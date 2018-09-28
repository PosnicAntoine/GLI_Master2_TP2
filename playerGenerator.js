var utils = require('./playerUtils.js');

var hp = 100;

function playerGenerator(name,attack,defense)
{
	function displayMyPlayerInfo()
	{
		console.log("My name is "+name+", I have "+attack+" attack, "+defense+" defense and "+hp+" health points.")
	}

	var player =
	{
		name: ""+name,
		attack: attack,
		defense: defense,
		hp: hp,
		displayPlayerInfo : displayMyPlayerInfo,
		fight : utils.fight
	}
	return player;
}

module.exports.hp = hp;
module.exports.playerGenerator = playerGenerator;