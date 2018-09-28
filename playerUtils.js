
function getMyPlayerRatio(player,n)
{
	return player.attack - n;
}

function fight(player2)
{
	ratio1 = getMyPlayerRatio(this,player2.defense);
	ratio2 = getMyPlayerRatio(player2,this.defense);

	if(ratio1>ratio2)
	{
		this.hp = this.hp - (ratio2 * (this.hp / ratio1));
		player2.hp = 0;
		console.log(this.name+" won! With "+this.hp+"HP, against "+player2.name+" with "+player2.hp+"HP.");
		this.displayPlayerInfo();
	}
	else if(ratio2>ratio1)
	{
		player2.hp = player2.hp - (ratio1 * (player2.hp / ratio2));
		this.hp = 0;
		console.log(player2.name+" won! With "+player2.hp+"HP, against "+this.name+" with "+this.hp+"HP.");
		player2.displayPlayerInfo();
	}
	else
	{
		player2.hp = player2.hp - (ratio1 * (player2.hp / ratio2));
		this.hp = this.hp - (ratio2 * (this.hp / ratio1));
		console.log("Draw! With "+this.name+" at "+this.hp+"HP, and "+player2.name+" at "+player2.hp+"HP.");
	}
}

module.exports.getMyPlayerRatio = getMyPlayerRatio;
module.exports.fight = fight;