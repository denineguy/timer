class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    
    start = () =>  {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick
        this.interval = setInterval(this.tick, 20);
    };

    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick) {
                this.onTick(this.timeRemaining)
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value).toFixed(2);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

    pause = () => {
        clearInterval(this.interval);
        if(this.onComplete) {
            this.onComplete()
        }
    }
}