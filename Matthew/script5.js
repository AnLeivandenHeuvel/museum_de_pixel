function result() {
    var score = 0;

    // Check answers for each question
    if (document.getElementById('correct1').checked) score++;
    if (document.getElementById('correct2').checked) score++;
    if (document.getElementById('correct3').checked) score++;
    if (document.getElementById('correct4').checked) score++;
    if (document.getElementById('correct5').checked) score++;
    

    alert("Jouw score is " + score);
}

function reset() {
    // Get all radio buttons and uncheck them
    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.checked = false;
    });
}