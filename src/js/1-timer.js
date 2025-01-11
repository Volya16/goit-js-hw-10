import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
minuteIncrement: 1,
locale: {
        firstDayOfWeek: 1,
        
    },
  onClose(selectedDates) { 
      console.log(selectedDates[0]);
      startBtnEl.disabled = true;
      if (selectedDates[0] <= new Date()) {
          alert('Please choose a date in the future');
      } else {
          startBtnEl.disabled = false;
          userSelectedDate = selectedDates[0].getTime(); 
          console.log(userSelectedDate);
      }
      
  },
};

flatpickr('#datetime-picker', options);


const inputEl = document.querySelector('.timer-input')
const startBtnEl = document.querySelector('.timer-btn');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartBtn)

function onStartBtn() {
  const intervalId = setInterval(() => {
    const diff = userSelectedDate - Date.now(); 
    if (diff >= 0) {
      
    }
  }, 1000)
}