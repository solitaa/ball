class Animate {
	constructor(objToAnimate) {
		this.domElem = objToAnimate;
		this.playPauseElem = document.getElementById("play_pause");

		this.state;
		this.height = 200;
		this.initialHeight = this.height;

		this.distance = 300;
		this.v = 0;
		this.v0 = 0;
		this.deltaTime = 0.1;
		this.timeInAir = 1;

		this.interval;
	}

	init() {
		this.gravity = Math.sqrt(this.distance * 2 / (this.timeInAir * this.timeInAir));
		this.maxSpeed = Math.sqrt(this.distance * 2 * this.gravity);
	}

	step() {
		this.v0 = this.v;
		this.v = this.v0 - this.gravity * this.deltaTime;
		this.height -=  this.v0 * this.deltaTime - this.gravity * this.deltaTime * this.deltaTime / 2;

		if(this.height >= this.initialHeight + this.distance)
		{
			this.height = this.initialHeight + this.distance;
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
		}, this.timeInAir / this.deltaTime);
		this.playPauseElem.innerHTML = "Pause";
		this.state = "running";
	}

	toggleDirection() {
		this.direction *= -1;
	}
}
