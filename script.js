let currentTime = document.querySelector('#currentTime');

const currentDate = new Date();
const hour = currentDate.getUTCHours();
const minutes = currentDate.getUTCMinutes();

//display the current time
currentTime.textContent = `${hour}:${minutes}`;