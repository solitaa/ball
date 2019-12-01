window.onload = function() {
	start();
};

function start() {

	let obj = new Animate(document.getElementById("object"));
	obj.init();
	obj.play();

	let playPauseElem = document.getElementById("play_pause");
	playPauseElem.onclick = function(e) {
		obj.togglePlay();
	}
}
