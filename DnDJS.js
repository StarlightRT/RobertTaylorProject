function rollDice(sides) {
    var result = Math.floor(Math.random() * sides) + 1;
    document.getElementById("result").innerText = "You rolled a d" + sides + " and got: " + result;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#dice button').forEach(function(button) {
        button.addEventListener('click', function() {
            var sides = parseInt(button.textContent.match(/\d+/)[0]);
            rollDice(sides);
        });
    });
});