const startStopBtn = document.querySelector('#startstop');
let gameRun = 1;

function startStop() {
	if (gameRun) {
		tikTakBoom.run();
    	startStopBtn.className = "btn btn-block btn-outline-danger";
    	startStopBtn.textContent = "Закончить игру";
    	gameRun = 0;
	} else {
		tikTakBoom.finish('lose');
		startStopBtn.className = "btn btn-block btn-outline-primary";
    	startStopBtn.textContent = "Начать игру";
    	gameRun = 1;
	}
}

startStopBtn.addEventListener('click', startStop);

window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        startStopBtn,
        document.querySelector('#players'),
    )


}
