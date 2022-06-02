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