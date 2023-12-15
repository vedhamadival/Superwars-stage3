const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((item,index)=>{
        if (index % 2 == 0){
            return {
                name: item,
                strength: getRandomStrength(),
                image: "images/super-"+(index+1)+".png",
                type: "hero"
            }
        }
        else{
            return {
                name: item,
                strength: getRandomStrength(),
                image: "images/super-"+(index+1)+".png",
                type: "villain"
            }
        }
    })

    return detailedPlayers;
}

console.log(initPlayers(PLAYERS))

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var x = players.filter((player)=>{
        return player.type == type
    })
   
    var y = x.map((player,i)=>{
        console.log(i)
        let frag = `<div class="player"><img src="${player.image}" alt=""><div class="name">${player.name}</div><div class="strength">${player.strength}</div></div>`
        return frag
    })

    fragment = y.join(' ')

    return fragment
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}