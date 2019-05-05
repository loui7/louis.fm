const player = new Plyr('video', {
    "loop":{active: true}
});

// Expose player so it can be used from the console
window.player = player;