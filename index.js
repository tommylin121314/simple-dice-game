num_players = 2;

function rollDice() {
    var player_1_score = Math.floor(Math.random() * 6) + 1;
    var player_2_score = Math.floor(Math.random() * 6) + 1;

    var prompt = document.getElementsByClassName("prompt")[0];
    var die_images = document.getElementsByClassName("die-image");

    die_images[0].setAttribute("src", "images/dice" + player_1_score + ".png");
    die_images[1].setAttribute("src", "images/dice" + player_2_score + ".png");

    if(player_1_score > player_2_score) {
        prompt.textContent = "Player 1 Wins.";
    }
    else if(player_1_score == player_2_score) {
        prompt.textContent = "Draw.";
    }
    else {
        prompt.textContent = "Player 2 Wins.";
    }
}

function addPlayer() {
    console.log("add player");
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