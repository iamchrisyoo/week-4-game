$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    console.log(Random)

    $('.displayAnswer').text(Random);

    var blueNum = Math.floor(Math.random() * 11 + 1)
    var purpleNum = Math.floor(Math.random() * 11 + 1)
    var greenNum = Math.floor(Math.random() * 11 + 1)
    var yellowNum = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('.wins').text(wins);
    $('.losses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('.displayAnswer').text(Random);
        blueNum = Math.floor(Math.random() * 11 + 1);
        purpleNum = Math.floor(Math.random() * 11 + 1);
        greenNum = Math.floor(Math.random() * 11 + 1);
        yellowNum = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('.scoreCount').text(userTotal);
    }

    function youWon() {
        alert("You won!");
        wins++;
        $('.wins').text(wins);
        reset();
    }
    function youLoss() {
        alert("You lose!");
        losses++;
        $('.losses').text(losses);
        reset()
    }

    $('.blueImg').on('click', function () {
        userTotal = userTotal + blueNum;
        console.log("New userTotal= " + userTotal);
        $('.scoreCount').text(userTotal);
        if (userTotal == Random) {
            youWon();
        }
        else if (userTotal > Random) {
            youLoss();
        }
    })
    $('.purpleImg').on('click', function () {
        userTotal = userTotal + purpleNum;
        console.log("New userTotal= " + userTotal);
        $('.scoreCount').text(userTotal);
        if (userTotal == Random) {
            youWon();
        }
        else if (userTotal > Random) {
            youLoss();
        }
    })
    $('.greenImg').on('click', function () {
        userTotal = userTotal + greenNum;
        console.log("New userTotal= " + userTotal);
        $('.scoreCount').text(userTotal);
        if (userTotal == Random) {
            youWon();
        }
        else if (userTotal > Random) {
            youLoss();
        }
    })
    $('.yellowImg').on('click', function () {
        userTotal = userTotal + yellowNum;
        console.log("New userTotal= " + userTotal);
        $('.scoreCount').text(userTotal);
        if (userTotal == Random) {
            youWon();
        }
        else if (userTotal > Random) {
            youLoss();
        }
    })
});
