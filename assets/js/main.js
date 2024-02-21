window.onload = () => {
    setupListener()
    listernerFunction.newGameYes()
    listernerFunction.newGame()

    //choix du premier joueur
    var index = listernerFunction.choosePlayerToPlayFirst()
    listernerFunction.showCurrentPlayer(index)

    //start game sound
    soundManager.audioNew()
}