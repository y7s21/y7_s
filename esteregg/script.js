document.addEventListener('DOMContentLoaded', function () {
  const targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 30); // Start with 30 minutes
  const countdownElement = document.getElementById('countdown');
  const videoElement = document.getElementById('myVideo');
  const countdownInterval = setInterval(updateCountdown, 1000);
  let fadeInInterval;

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

    if (minutes <= 0 && seconds <= 0) {
      clearInterval(countdownInterval);
      countdownElement.style.display = 'none'; // Hide the countdown text

      // Gradual fade-in effect for the video over 5 seconds
      fadeInInterval = setInterval(fadeIn, 50);
    }
  }

  function fadeIn() {
    let currentOpacity = parseFloat(videoElement.style.opacity) || 0;
    if (currentOpacity < 1) {
      currentOpacity += 0.1;
      videoElement.style.opacity = currentOpacity;
      videoElement.style.display = 'block'; // Ensure the video is visible
    } else {
      clearInterval(fadeInInterval);
      videoElement.style.opacity = 1; // Ensure opacity is set to 1
      videoElement.play(); // Start playing the video
    }
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
});
