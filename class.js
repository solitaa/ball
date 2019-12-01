class Animate {
	constructor(objToAnimate) {
		this.domElem = objToAnimate;
		this.playPauseElem = document.getElementById("play_pause");

		this.state;
		this.maxHeight = 500;
		this.v = 0;
		this.v0 = 0;
		this.gravity = 10;
		this.deltaTime = 0.2;
		this.allTime = 2;

		this.interval;
	}

	init() {
		this.height = 200;
		this.maxSpeed = Math.sqrt((this.maxHeight - this.height) * 2 * this.gravity);
	}

	step() {
		this.v0 = this.v;
		this.v = this.v0 - this.gravity * this.deltaTime;
		this.height -=  this.v0 * this.deltaTime - this.gravity * this.deltaTime * this.deltaTime / 2;

		if(this.height >= this.maxHeight)
		{
			this.height = this.maxHeight;
			this.v = this.maxSpeed;
		}

		this.changePropDist("top", this.height);
	}
	togglePlay() {
		if (this.state == "paused") {
			this.state = "running";
			this.play();
		}
		else if(this.state == "running" || this.state == ""){
			this.state = "paused";
			this.stop();
		}
	}
	changePropDist(dir, newCord) {
		this.domElem.style[dir] = newCord + "px";
	}

	stop() {
		clearInterval(this.interval);
		this.playPauseElem.innerHTML = "Play";
		this.state = "paused";
	}

	play() {
		this.interval = setInterval(() => {
			this.step();
			// this.stop();
		}, this.deltaTime * 100);
		this.playPauseElem.innerHTML = "Pause";
		this.state = "running";
	}

	toggleDirection() {
		this.direction *= -1;
	}
}
