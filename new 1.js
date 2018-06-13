let heroes = [
{
name: 'Io',
damage: 39,
typeOfAttack: 'Distant battle',
mainAttribute: 'Strenght'
},
{
name: 'Sniper',
damage: 36,
typeOfAttack: 'Distant battle',
mainAttribute: 'Agility'
},
{
name: 'Phantom Assassin',
damage: 46,
typeOfAttack: 'Melee',
mainAttribute: 'Agility'
},
{
name: 'Invoker',
damage: 35,
typeOfAttack: 'Distant battle',
mainAttribute: 'Intellect'
},
{
name: 'Ogre Magi',
damage: 58,
typeOfAttack: 'Melee',
mainAttribute: 'Intellect'
};
]
let getHeroByAttribute = (mainAttribute) =>{
	let attribute = heroes.filter(function(agility)){
		console.log('This agility heroes:' + attribute);
	}
}
getHeroByAttribute('Agility');
