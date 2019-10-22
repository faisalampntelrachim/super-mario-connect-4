(function() {
    var currentPlayer = "player1";
    var restart = $("button");
    var diagonalWins = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [8, 15, 22, 29],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],
        [12, 19, 26, 33],
        [19, 26, 33, 40],
        [18, 25, 32, 39],
        [38, 33, 28, 23],
        [37, 32, 27, 22],
        [32, 27, 22, 17],
        [36, 31, 26, 21],
        [31, 26, 21, 16],
        [26, 21, 16, 11],
        [24, 19, 14, 9],
        [19, 14, 9, 4],
        [18, 13, 8, 3],
        [30, 25, 20, 15],
        [25, 20, 15, 10],
        [20, 15, 10, 5],
        [5, 10, 15, 20]
    ];

    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }

        if (i == -1) {
            // column was full
            return;
        }

        function switchPlayers() {
            if (currentPlayer == "player1") {
                currentPlayer = "player2";
            } else {
                currentPlayer = "player1";
            }
        }

        //Winner
        function checkForVictory(slots) {
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count == 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        // the restart button when there is a winner
        if (checkForVictory(slotsInColumn)) {
            alert("You won");
            restart.on("click", function() {
                location.reload();
            });
        } else if (checkForVictory($(".row" + i))) {
            // RESTART THE GAME
            alert(" You won");
            restart.on("click", function() {
                location.reload();
            });
        }

        if (checkForVictory(slotsInColumn)) {
            console.log("Super-Mario winner");
        } else if (checkForVictory($(".row" + i))) {
            console.log("Luigi winner");
        }

        //diagonal win
        function checkForDiagonalWin() {
            for (var i = 0; i < diagonalWins.length; i++) {
                var count = 0;
                for (var j = 0; j < diagonalWins[i].length; j++) {
                    if (
                        $(".slot")
                            .eq(diagonalWins[i][j])
                            .hasClass(currentPlayer)
                    ) {
                        count++;
                    }
                }
                if (count == 4) {
                    // alert("you won!");
                    Winner();
                    // } else {
                    //     count = 0;
                }
            }
        }
        function Winner() {
            alert("You won");
        }
        checkForDiagonalWin();
        switchPlayers();
    });

    function superMarioAnimation() {
        var myanimation = document.getElementById("Animation");
        var animation = 0;
        var id = setInterval(move, 10);
        function move() {
            if (animation == 520) {
                clearInterval(id);
            } else {
                animation++;
                myanimation.style.top = animation + "px";
                myanimation.style.left = animation + "px";
            }
        }
    }
    superMarioAnimation();
    function superMarioAnimationright() {
        var myanimation = document.getElementById("Animation-right");
        var animation = 0;
        var id = setInterval(move, 10);
        function move() {
            if (animation == 520) {
                clearInterval(id);
            } else {
                animation++;
                myanimation.style.top = animation + "px";
                myanimation.style.right = animation + "px";
            }
        }
    }
    superMarioAnimationright();
})();
