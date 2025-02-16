document.addEventListener('DOMContentLoaded', function() {
    // Set the target date (New Year in UTC+0)
    const targetDate = new Date('2026-01-01T00:00:00Z');  // UTC time for New Year

    // Get the elements for days, hours, minutes, and seconds
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Function to update the timer
    function updateTimer() {
        const now = new Date();
        const remainingTime = targetDate - now;  // Get the difference in milliseconds

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        daysElement.innerText = days < 10 ? `${days}` : days;
        hoursElement.innerText = hours < 10 ? `${hours}` : hours;
        minutesElement.innerText = minutes < 10 ? `${minutes}` : minutes;
        secondsElement.innerText = seconds < 10 ? `${seconds}` : seconds;
        // If the countdown reaches zero, clear the interval (optional)
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            // You can add a message or change the style here when the countdown is finished
            daysElement.innerText = '00';
            hoursElement.innerText = '00';
            minutesElement.innerText = '00';
            secondsElement.innerText = '00';
            // Optional: Display a message or perform some action when the countdown ends
            console.log("Happy New Year!");
        }
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Initialize the timer immediately on page load
    updateTimer();
});
