import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;
let ms;

const inputEl = document.querySelector('.timer-input');
const startBtnEl = document.querySelector('.timer-btn');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');

startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
minuteIncrement: 1,
locale: {
        firstDayOfWeek: 1,
  },
    
  onClose(selectedDates) { 
      startBtnEl.disabled = true;
    if (selectedDates[0] <= new Date()) {
      iziToast.error({
        title: 'Attention',
        message: 'Please choose a date in the future',
        position: 'topRight',
        transitionIn: 'bounceInLeft',
        timeout: 6000,
        closeOnClick: true,
      });
      } else {
        userSelectedDate = selectedDates[0].getTime(); 
        startBtnEl.disabled = false;
      }
  },
};

flatpickr('#datetime-picker', options);


function onStartBtn() {
  startBtnEl.disabled = true;
  inputEl.disabled = true;

  const intervalId = setInterval(() => {
    ms = userSelectedDate - Date.now(); 
    
    if (ms >= 0) {
      const timeLeft = convertMs(ms);
      updateTimer(timeLeft);
    } else {
      clearInterval(intervalId);
      inputEl.disabled = false;
    }
  }, 1000)
}

startBtnEl.addEventListener('click', onStartBtn);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minEl.textContent = addLeadingZero(minutes);
  secEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

