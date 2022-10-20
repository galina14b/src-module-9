import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let isFuture = false;
const startBtn = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    todayDate = new Date().getTime();
    chosenDate = selectedDates[0].getTime();
    if (todayDate <= chosenDate) {
      isFuture = true;
    } else {
      window.alert("Please choose a date in the future");
    };
    if (!isFuture) {
      return
    } else {
      startBtn.addEventListener('click', startBtnOption);
    };
  },
};

const flatpickrItem = new flatpickr("input#datetime-picker", options);

const timer = {
  isActive: false,
  intervalId: null,
  start() {
    if (this.isActive) {
        return
      }
    this.intervalId = setInterval(() => {
      const updatedTime = Date.now();
      this.isActive = true;
      const deltaTime = chosenDate - updatedTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimerFace(days, hours, minutes, seconds);
      if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
        clearInterval(this.intervalId);
      }
    }, 1000);

  }
}
function startBtnOption() {
  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const daysElement = document.querySelector('.value[data-days]');
const hoursElement = document.querySelector('.value[data-hours]')
const minutesElement = document.querySelector('.value[data-minutes]')
const secondsElement = document.querySelector('.value[data-seconds]')

function updateTimerFace(days, hours, minutes, seconds) {
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

