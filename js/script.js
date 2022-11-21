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
  slider.style.backgroundImage = 'sdas';
  const style = getComputedStyle(slider);
  console.log('elem', style.backgroundImage);

  let i = 0;
  setInterval(() => {
    slider.style.backgroundImage = `url(img/slider${i}.png)`;
    i += 1;
    if (i === 3) {
      i = 0;
    }
  }, 2000);
});
