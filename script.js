// Countdown Timer (60 seconds loop) with safety checks
let time = 60;

function updateTimer() {
  const el = document.getElementById("timer");
  if (!el) {
    console.warn('Timer element not found (id="timer").');
    return;
  }

  el.textContent = time + "s";

  time--;
  if (time < 0) {
    time = 60;
  }
}

// Start timer after DOM content loaded to be safe
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    updateTimer();
    setInterval(updateTimer, 1000);
  });
} else {
  updateTimer();
  setInterval(updateTimer, 1000);
}
