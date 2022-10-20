const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  delay = +delayEl.value;
  step = +stepEl.value;
  amount = +amountEl.value;
  delayEl.value = '';
  stepEl.value = '';
  amountEl.value = '';

  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  } 
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
    }, delay);
  })
}
