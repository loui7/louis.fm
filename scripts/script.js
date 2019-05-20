const player = new Plyr('video', {
    "loop":{active: true},
    "ratio":"128:69"
});

// Expose player so it can be used from the console
window.player = player;