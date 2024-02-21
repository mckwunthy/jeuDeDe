var soundManager = {
    // bruit ouverture -> ouverture
    audioOpenGame: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/ouverture.mp3"
    },
    // bruit roll -> dicethrow
    audioRollDice: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/diceroll.mp3"
    },
    // bruit negatif -> down
    audioWinPoint: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/up.mp3"
    },
    //audioLosePoint
    audioLosePoint: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/down.mp3"
    },
    // bruit 3 -> danger
    audioThreePoint: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/danger.mp3"
    },
    // bruit hold -> hold
    audioHold: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/hold.mp3"
    },
    // bruit new -> new
    audioNew: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/new.mp3"
    },
    audioCongrat: () => {
        var audio = document.createElement('audio')
        audio.autoplay = true
        audio.src = "/assets/audios/congrat.mp3"
    },
    audioCongratSuite: () => {
        var audioCongrate = document.createElement('audio')
        audioCongrate.autoplay = true
        audioCongrate.src = "/assets/audios/congratsuite.mp3"
    }








    // bruit win -> congrat / congratsuite



    //     bruit bt

    // bruit 100 pts -> uptowin
}