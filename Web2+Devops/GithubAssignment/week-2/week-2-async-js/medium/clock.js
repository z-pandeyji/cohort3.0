function formatTime(date, is24HourFormat = true) {
    const hours = is24HourFormat ? date.getHours() : (date.getHours() % 12 || 12);
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = is24HourFormat ? '' : (date.getHours() >= 12 ? ' PM' : ' AM');
    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${period}`;
  }
  
  function displayTime() {
    const now = new Date();
    const time24HourFormat = formatTime(now, true);
    const time12HourFormat = formatTime(now, false);
    console.clear();
    console.log(`24-hour format: ${time24HourFormat}`);
    console.log(`12-hour format: ${time12HourFormat}`);
    console.log("Press Ctrl+C to stop the clock.");
  }
  
  function startClock() {
    displayTime();
    setInterval(displayTime, 1000);
  }

  startClock();
  console.log("Press Ctrl+C to stop the clock.");
  
  