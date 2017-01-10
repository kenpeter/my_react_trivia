// sounds
let sounds = {};

// card flip
sounds.flip = new Audio("assets/audio/card-flip.mp3");

// card back
sounds.flipBack = new Audio("assets/audio/card-flip-back.mp3");

// cound down
sounds.countdown = new Audio("assets/audio/countdown.wav");

// play['flip'].currentTime
// play['flip'].play()
export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};

// stop
export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};

