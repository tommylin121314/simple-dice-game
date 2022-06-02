num_players = 2;

function rollDice() {

    var scores = []
    var prompt = document.getElementsByClassName("prompt")[0];
    var die_images = document.getElementsByClassName("die-image");
    
    for(var i = 0; i < num_players; i++) {

        var score = Math.floor(Math.random() * 6) + 1;
        scores.push(score);
        die_images[i].setAttribute("src", "images/dice" + score + ".png");

    }

    var max = Math.max(...scores);
    var index = scores.indexOf(max);
    scores.splice(index, 1);

    if(scores.includes(max)) {
        prompt.textContent = "Draw.";
    }
    else {
        prompt.textContent = "Player " + (index + 1) + " wins!";
    }
}

function addPlayer() {

    if(num_players < 4) {

        num_players++;
        var add_player = document.getElementsByClassName("add-player")[0];
        var players = document.getElementsByClassName("players")[0];

        var new_player = document.createElement("div");
        new_player.classList.add("player")
        new_player.innerHTML = "<h2 class='player-title'>Player " + num_players + "</h2><img class='die-image' src='images/dice1.png'>";
        players.insertBefore(new_player, add_player)

        if(num_players == 4) {
            players.removeChild(add_player);
        }
    
    }

}