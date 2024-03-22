document.getElementById('rollButton').addEventListener('click', function() {
    var result = Math.floor(Math.random() * 20) + 1; // Roll a d20
    document.getElementById('result').textContent = 'You rolled a ' + result + '.';
});
