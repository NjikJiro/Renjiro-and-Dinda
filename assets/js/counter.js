// Set the start dates for two different events
const startDate1 = new Date("2023-03-02T12:12:00").getTime();  // Event 1
const startDate2 = new Date("2024-08-13T10:30:22").getTime();  // Event 2

// Update the first counter every second
const updateCounter1 = setInterval(function() {
    const now = new Date().getTime();
    const timeElapsed1 = now - startDate1;

    // Time calculations for days, hours, minutes, and seconds for counter 1
    const days1 = Math.floor(timeElapsed1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((timeElapsed1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((timeElapsed1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((timeElapsed1 % (1000 * 60)) / 1000);

    // Display the result in an element with id="counter1"
    document.getElementById("counter1").innerHTML = days1 + " Hari, " + hours1 + " Jam, "
        + minutes1 + " Menit, " + seconds1 + " Detik";

}, 1000);

// Update the second counter every second
const updateCounter2 = setInterval(function() {
    const now = new Date().getTime();
    const timeElapsed2 = now - startDate2;

    // Time calculations for days, hours, minutes, and seconds for counter 2
    const days2 = Math.floor(timeElapsed2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((timeElapsed2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((timeElapsed2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((timeElapsed2 % (1000 * 60)) / 1000);

    // Display the result in an element with id="counter2"
    document.getElementById("counter2").innerHTML =  days2 + " Hari, " + hours2 + " Jam, "
        + minutes2 + " Menit, " + seconds2 + " Detik";

}, 1000);
