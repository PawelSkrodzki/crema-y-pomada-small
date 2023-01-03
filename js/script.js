// DATE FUNCTION

const clockSpan = document.getElementById('time');
const dateSpan = document.getElementById('date');

showTime = () => {
  clockSpan.innerHTML = `${moment().format('h:mm')}`;
  dateSpan.innerHTML = `${moment().format('DD/MM')}`;
};
setInterval(showTime, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');

  let i = 0;
  setInterval(() => {
    slider.src = `img/slider${i}.jpg`;
    i += 1;
    if (i === 4) {
      i = 0;
    }
  }, 3000);
});
