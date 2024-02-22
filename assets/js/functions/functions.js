//variable
var newBt = document.querySelector('.game-box div.new')

var yesBt = document.querySelector('.yesBt')
var noBt = document.querySelector('.noBt')

var scoreGlobalOne = document.querySelector('.player-one-global')
var scoreGlobalTwo = document.querySelector('.player-two-global')
var currentOne = document.querySelector('.player-one-current')
var currentTwo = document.querySelector('.player-two-current')
var inputOne = document.querySelectorAll('div input')[0]
var inputTwo = document.querySelectorAll('div input')[1]

var updatePenOne = document.querySelectorAll('.fa-pen')[0]
var updatePenTwo = document.querySelectorAll('.fa-pen')[1]

var playersNameTable = ["player One", "player Two"]

var playerBoxName = document.querySelectorAll('input')

var scoreGlobalTable = [0, 0]
var currentTable = [0, 0]

var diceTable = ["one", "two", "three", "four", "five", "six"]

var roll = document.querySelector("div.roll")

var currentPlayer

var hold = document.querySelector('.hold')

var dicePoints = [-50, -25, 0, 33, 28, 75]

//scrore pour gagner
var winnerGoal = 500

var winnerBox = document.querySelector('.winnerBox')
var winnerBoxTitle = document.querySelector('.winnerBox h3')
var reprendre = document.querySelector('.winnerBox div.reprendre')


//listernerfunction
var listernerFunction = {
    newGame: () => {
        var boxCf = document.querySelector('div.boxCf')
        // boxCf.classList.contains('none') ? boxCf.classList.toggle('none') : null
        boxCf.classList.toggle('none')

        //new click sound
        soundManager.audioNew()
    },
    newGameNo: () => {
        listernerFunction.newGame()
    },
    initCurrentOne: () => {
        currentOne.innerHTML = "CURRENT <br> 0"
    },
    initCurrentTwo: () => {
        currentTwo.innerHTML = "CURRENT <br> 0"
    },
    initGlobalOne: () => {
        scoreGlobalOne.innerHTML = "0"
    },
    initGlobalTwo: () => {
        scoreGlobalTwo.innerHTML = "0"
    },
    initNameOne: () => {
        inputOne.value = ""
    },
    initNameTwo: () => {
        inputTwo.value = ""
    },
    newGameYes: () => {
        listernerFunction.initNameOne()
        listernerFunction.initNameTwo()
        listernerFunction.initGlobalOne()
        listernerFunction.initGlobalTwo()
        listernerFunction.initCurrentOne()
        listernerFunction.initCurrentTwo()

        listernerFunction.newGame()

    },
    updatePlayersNameTable: () => {
        if (inputOne.value.trim()) {
            playersNameTable.shift()
            playersNameTable.unshift(inputOne.value.trim())
        } else {
            playersNameTable.shift()
            playersNameTable.unshift("player One")
        }

        if (inputTwo.value.trim()) {
            playersNameTable.pop()
            playersNameTable.push(inputTwo.value.trim())
        } else {
            playersNameTable.pop()
            playersNameTable.push("player Two")
        }

        console.log(playersNameTable);
    },
    //update name of player one
    updateNameOne: (event) => {
        // event.target.style.color == "black" ? event.target.style.color = "red" : event.target.style.color = "black"

        var inputOne = document.querySelectorAll('div input')[0]
        // inputOne.disabled ? inputOne.disabled = false : inputOne.disabled = true
        if (inputOne.disabled) {
            inputOne.disabled = false
            inputOne.style.border = "1px solid red"
        } else {
            inputOne.disabled = true
            inputOne.style.border = "none"
        }
        listernerFunction.updatePlayersNameTable()
    },
    //update name of player two
    updateNameTwo: (event) => {

        var inputTwo = document.querySelectorAll('div input')[1]
        if (inputTwo.disabled) {
            inputTwo.disabled = false
            inputTwo.style.border = "1px solid red"
        } else {
            inputTwo.disabled = true
            inputTwo.style.border = "none"
        }
        listernerFunction.updatePlayersNameTable()

    },
    choosePlayerToPlayFirst: () => {
        return currentPlayer = Math.floor(Math.random() * 2)
    },
    showCurrentPlayer: (index) => {
        playerBoxName[index].style.backgroundColor = "yellow"
        var suivant
        index == 0 ? suivant = 1 : suivant = 0
        playerBoxName[suivant].style.backgroundColor = "white"
    },
    //gestion du des : animation
    animateDice: (index = 2) => {
        //roll dice sound
        soundManager.audioRollDice()

        var diceBox = document.querySelector('.de-box')

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-two"></i>`
            diceBox.style.color = "yellow"
        }, 166);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-six"></i>`
            diceBox.style.color = "red"
        }, 332);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-one"></i>`
            diceBox.style.color = "gray"
        }, 498);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-three"></i>`
            diceBox.style.color = "orange"
        }, 664);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-one"></i>`
            diceBox.style.color = "blue"

        }, 830);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-four"></i>`
            diceBox.style.color = "green"
        }, 1000);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-two"></i>`
            diceBox.style.color = "blue"
        }, 1166);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-six"></i>`
            diceBox.style.color = "orange"
        }, 1332);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-one"></i>`
            diceBox.style.color = "gray"
        }, 1498);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-four"></i>`
            diceBox.style.color = "yellow"
        }, 1664);

        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-one"></i>`
            diceBox.style.color = "blue"
        }, 1830);

        //face qui sera affichee par defaut
        setTimeout(() => {
            diceBox.innerHTML = ""
            diceBox.innerHTML = `<i class="fa-solid fa-dice-${diceTable[index]}"></i>`
            diceBox.style.color = "red"
        }, 2000);

        //musique si gaint ou perte de point ou 3
        setTimeout(() => {
            if (diceTable[index] == "one" || diceTable[index] == "two") {
                soundManager.audioLosePoint()
            }
            if ((diceTable[index]) == "four" || (diceTable[index]) == "five" || (diceTable[index]) == "six") {
                //win point
                soundManager.audioWinPoint()
            }
            if ((diceTable[index]) == "three") {
                //three point
                soundManager.audioThreePoint()
            }
        }, 2000);
    },
    rollDice: () => {
        return Math.floor(Math.random() * 6)
    },
    //initialise la valeur de current
    initCurrentTable: (currentPlayer) => {
        currentTable.splice(currentPlayer, 1, 0)
        var currentScore = document.querySelectorAll('.player-box div div:nth-child(3)')[currentPlayer]
        currentScore.innerHTML = `CURRENT <br>${currentTable[currentPlayer]}`
    },
    currentManage: (currentPlayer, diceValue) => {
        var currentScore = document.querySelectorAll('.player-box div div:nth-child(3)')[currentPlayer]

        diceValue = diceValue + 1

        if (diceValue != 3) {
            diceValue = dicePoints[diceValue - 1]
        } else {
            diceValue = 0
            if (currentTable[currentPlayer] > 0) {
                currentTable.splice(currentPlayer, 1, diceValue)
                listernerFunction.holdPlayer()
                return
            } else {
                listernerFunction.holdPlayer()
                return
            }

            return
        }

        diceValue += currentTable[currentPlayer]
        currentTable.splice(currentPlayer, 1, diceValue)
        currentScore.innerHTML = `CURRENT <br>${diceValue}`
    },
    globalManage: (currentPlayer, currentValue) => {
        var globalScore = document.querySelectorAll('.player-box div div:nth-child(2)')[currentPlayer]

        currentValue += scoreGlobalTable[currentPlayer]
        scoreGlobalTable.splice(currentPlayer, 1, currentValue)
        globalScore.innerHTML = currentValue
    },
    showDiceRollResult: () => {
        var diceValue = listernerFunction.rollDice()
        listernerFunction.animateDice(diceValue)

        setTimeout(() => {
            listernerFunction.currentManage(currentPlayer, diceValue)
        }, 2000);
    },
    emptyAll: () => {
        scoreGlobalTable = [0, 0]
        currentTable = [0, 0]
    },
    winner: (currentPlayer) => {
        currentPlayer == 1 ? precedent = 0 : precedent = 1
        // console.log(scoreGlobalTable[precedent]);
        if (scoreGlobalTable[precedent] > winnerGoal) {
            var currentScore = document.querySelectorAll('.player-box div div:nth-child(3)')[precedent]
            var globalScore = document.querySelectorAll('.player-box div div:nth-child(2)')[precedent]
            var input = document.querySelectorAll('input')[precedent]

            var stop = setInterval(() => {
                currentScore.style.backgroundColor == "yellow" ? currentScore.style.backgroundColor = "white" : currentScore.style.backgroundColor = "yellow"

                globalScore.style.backgroundColor == "yellow" ? globalScore.style.backgroundColor = "white" : globalScore.style.backgroundColor = "yellow"

                input.style.backgroundColor == "yellow" ? input.style.backgroundColor = "white" : input.style.backgroundColor = "yellow"
            }, 300);

            setTimeout(() => {
                clearInterval(stop)
            }, 3000);

            setTimeout(() => {
                winnerBox.classList.contains('none') ? winnerBox.classList.toggle('none') : null
                winnerBoxTitle.innerHTML = ""
                winnerBoxTitle.innerHTML = `Felicitations ${playersNameTable[precedent]} vous avez gagné la partie`
            }, 3100);

            //congrat sound
            setTimeout(() => {
                soundManager.audioCongrat()
            }, 500);

            setTimeout(() => {
                soundManager.audioCongratSuite()
            }, 2000);

            //vider les tables
            listernerFunction.emptyAll()
        }

        // listernerFunction.reprendrePartie()
    },
    reprendrePartie: () => {
        listernerFunction.initNameOne()
        listernerFunction.initNameTwo()
        listernerFunction.initGlobalOne()
        listernerFunction.initGlobalTwo()
        listernerFunction.initCurrentOne()
        listernerFunction.initCurrentTwo()

        winnerBox.classList.toggle('none')

        //reprendre clikc sound
        soundManager.audioNew()

    }, holdPlayer: () => {
        listernerFunction.globalManage(currentPlayer, currentTable[currentPlayer])
        listernerFunction.initCurrentTable(currentPlayer)
        currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0
        listernerFunction.showCurrentPlayer(currentPlayer)

        listernerFunction.winner(currentPlayer)

        //hold click sound
        soundManager.audioHold()
    }
}

//setup listener
var setupListener = () => {
    newBt.onclick = listernerFunction.newGame
    noBt.onclick = listernerFunction.newGameNo
    yesBt.onclick = listernerFunction.newGameYes

    //update player name
    updatePenOne.onclick = listernerFunction.updateNameOne
    updatePenTwo.onclick = listernerFunction.updateNameTwo

    //roll dice
    roll.onclick = listernerFunction.showDiceRollResult

    //hold player
    hold.onclick = listernerFunction.holdPlayer

    //winner
    // listernerFunction.winner(currentPlayer)


    //reprendre
    reprendre.onclick = listernerFunction.reprendrePartie
}