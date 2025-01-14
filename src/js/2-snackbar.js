import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    
    let {
        delay: { value: delayValue },
        state: { value: stateValue },
    } = formEl.elements;


    createPromise(delayValue, stateValue)
      .then(onSuccess)
      .catch(onError);
}

function createPromise(delay, condition) {
    const promise = new Promise((resolve, reject) => {
        if (condition === "fulfilled") {
            setTimeout(() => {
            resolve(delay);
            }, delay);
        } else {
            if (condition === 'rejected')
            setTimeout(() => {
            reject(delay);
            }, delay);
        }
    });
    return promise;
}

function onSuccess(delay) {
iziToast.success({
//   title: 'OK',
  message: `Fulfilled promise in ${delay} ms`,
  position: 'topCenter',
});
}

function onError(delay) {
  iziToast.error({
    // title: 'Error',
    message: `Rejected promise in ${delay}ms`,
    position: 'topCenter',
  });
}
