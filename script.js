// JavaScript code to populate the dynamic data
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
const currentUTC = new Date().getTime();

// Display the current day of the week
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDay];

// Display the current UTC time in milliseconds
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTC;
