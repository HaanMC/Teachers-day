<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>birthday</title>

  </head>
  <style>
* {
  box-sizing: border-box;
}



/* letter open css  */



#wrapper {
  width: auto;
  margin: auto;
}

.envelope {
  width: 200px;
  height: 100px;
  margin: 0 auto 0;
  background: #ddd;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.25);
  position: relative;
  perspective: 800px;
}
.envelope:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 0 solid rgba(0, 0, 0, 0.25);
  border-width: 45px 100px;
  border-top-color: transparent;
  z-index: 2;
}

.envelope .flap {
  position: absolute;
  width: 100%;
  height: 0;
  border: 0 solid transparent;
  border-width: 50px 100px;
  z-index: 3;
}
.envelope .flap.front {
  border-left-color: #eee;
  border-right-color: #eee;
  border-bottom-color: #ccc;
  z-index: 3;
}
.envelope .flap.front:after {
  content: "";
  width: 100%;
  height: 0;
  position: absolute;
  left: -100px;
  bottom: -50px;
  border: 0 solid transparent;
  border-width: 49px 100px;
  border-bottom-color: #eee;
}

.envelope .flap.top {
  border-top-width: 55px;
  border-top-color: #aaa;
  z-index: 3;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: top;
  transform-origin-y: top;
  perspective: 800;
  transform-style: preserve-3d;
}
.envelope.open .flap.top {
  animation-name: flip;
}
.envelope .flap.top:after {
  content: "";
  position: absolute;
  left: -100px; /* border-left-width */
  top: -55px; /* border-top-width */
  width: 100%;
  height: 0;
  border: 0 solid transparent;
  border-width: 54px 100px;
  border-top-color: #eee;
}

.envelope .letter {
  position: absolute;
  width: 194px;
  height: 84px;
  background: url("https://st.quantrimang.com/photos/image/2021/10/25/Background-20-11-5.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  top: 8px;
  left: 3px;
  border: 1px solid #ccc;
  z-index: 1;
  animation-duration: 2s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  transform-style: preserve-3d;
}
.envelope.open .letter {
  animation-name: remove;
}
.envelope .letter:before,
.envelope .letter:after {
  content: "";
  position: absolute;
  width: 192px;
  height: 75%;
  left: -1px;
  background: #fff;
  border: 1px solid #ccc;
  animation-duration: 1s;
  animation-delay: 3.5s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: top;
  transform-origin-y: top;
  transform-style: preserve-3d;
  transform: rotateX(10deg);
}
.envelope .letter:before {
  z-index: 1;
}
.envelope.open .letter:before {
  animation-name: fold-up;
}
.envelope .letter:after {
  animation-delay: 4.5s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: bottom;
  transform-origin-y: bottom;
  transform: rotateX(-5deg);
  bottom: 0;
}
.envelope.open .letter:after {
  animation-name: fold-down;
}




/* letter open animation */




@keyframes flip {
  100% {
    transform: rotateX(180deg);
    z-index: 1;
  }
}

@keyframes remove {
  50% {
    top: -120px;
  }
  100% {
    top: 8px;
    z-index: 3;
  }
}

@keyframes fold-up {
  from {
  }
  to {
    transform: rotateX(140deg);
  }
}

@keyframes fold-down {
  from {
  }
  to {
    transform: rotateX(-140deg);
  }
}




/* letter drop from top animation  */




.pop-up {
  margin-top: -100px;
  animation: drop 1s ease forwards;
}

@keyframes drop {
  0% {
  }
  100% {
    transform: translateY(300px);
    opacity: 1;
  }
}




/* image .pop-up with rotating animation */




.book{

  height: 65vh;
  width: 21%;
  margin: auto;
  z-index: 6;
  opacity: 0;
  animation: circles 1s 5s ease forwards;
}



@keyframes circles{
  0%{
        transform: scale(1)  ;
        border-radius: 20%;
        opacity: 0.5;
  }
 
  100%{
        transform: scale(5) ;
        border-radius: 20%;
        opacity: 1;
  }
}

.book-first{
  height: 100%;
  width: 100%;
  font-size: 12px;
  z-index: 7;
  background: url("https://st.quantrimang.com/photos/image/2021/10/25/Background-20-11-5.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
}





/* emoji top and bottom css */




.top{
  position: fixed;
  left: 0;
  top: 0;
  
}
.bottom{
  position: fixed;
   left: 0;
   bottom: 0;
}






/* dancing letter css wiht animation */






.let{
  margin-top: 120px;
  font-size: 10px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  opacity: 0;
  animation: textview 1s 20s ease forwards;
}
.happy h1{
  display: flex;
  justify-content: space-evenly;
}
.happy h1 span{
  color: #262626;
  background: #fff; 
  padding: 4px 6px; 
  display: table-cell; 
  box-shadow: inset 0 0 5px 
            rgba(0, 0, 0, 0.3), 
                0 5px 0 #ccc; 
   animation: animate 0.5s infinite; 
}



@keyframes animate { 
  0% { 
    transform: translateY(0px); 
  } 

  50% { 
    transform: translateY(-20px); 
  } 

  100% { 
    transform: translateY(0px); 
  } 
} 



h1 span:nth-child(1) { 
  animation-delay: 0.1s; 
} 

h1 span:nth-child(2) { 
  animation-delay: 0.2s; 
} 

h1 span:nth-child(3) { 
  animation-delay: 0.3s; 
} 

h1 span:nth-child(4) { 
  animation-delay: 0.4s; 
} 

h1 span:nth-child(5) { 
  animation-delay: 0.5s; 
} 

h1 span:nth-child(6) { 
  animation-delay: 0.6s; 
} 

h1 span:nth-child(7) { 
  animation-delay: 0.7s; 
} 

h1 span:nth-child(8) { 
  animation-delay: 0.8s; 
} 

h1 span:nth-child(9) { 
  animation-delay: 0.9s; 
} 

h1 span:nth-child(10) { 
  animation-delay: 1s; 
} 



@keyframes textview {
  100%{
    opacity: 1;
  }
}




/* gif css and animation here */



.gif{
  margin-top: 34px;
  height: 50px;
  width:100%;
  background: url(./images//blast.gif);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  animation: textview 1s 20s ease forwards;
}
  </style>
  <body>

    <div class="pop-up">
      <div id="wrapper">
        <div class="envelope open">
          <div class="flap front"></div>
          <div class="flap top"></div>
          <div class="letter"></div>
        </div>
      </div>
      <h1 style="text-align:center ;color:brown;">From HaAn with LOVE</h1>
    </div>
   
    <div class="book">
      <div class="book-first"></div>
    </div>

    <script>
      var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();
      const startit = () => {
        setTimeout(function () {
          confetti.start();
        }, 1000);
      };

      const stopit = () => {
        setTimeout(function () {
          confetti.stop();
        }, 5000);
      };

      startit();
      stopit();
    </script>
  
    
   
  </body>
</html>
