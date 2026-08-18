function updateClock() {
  const now = new Date();

  // Extract hours, minutes, seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Convert to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Converts 0 to 12 for midnight
  const formattedHours = String(hours).padStart(2, '0');

  // Format date string
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', dateOptions);

  // Update DOM elements
  document.getElementById('clock-display').textContent = `${formattedHours}:${minutes}:${seconds}`;
  document.getElementById('ampm-display').textContent = ampm;
  document.getElementById('date-display').textContent = formattedDate;
}

// Run immediately, then update every second
updateClock();
setInterval(updateClock, 1000);
