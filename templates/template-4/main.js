const lamp = document.getElementById('lamp');
const lampText = document.getElementById('lamp-text');
const description = document.getElementById('description');
const clickEl = document.getElementById('click');
const copyright= document.getElementById('copyright')
const author= document.getElementById('author')

let isOn = true;
copyright.addEventListener('click', function() {
  window.open('https://norhan.netlify.app/', '_blank');
});
function toggleLamp() {
  isOn = !isOn;
  lamp.src = isOn ? '../public/light.png' : '../public/dark.png';
  document.body.classList.toggle('bg-black', isOn);
  document.body.classList.toggle('bg-white', !isOn);
  lampText.textContent = isOn ? 'trust the darkness' : 'lumière templates';
  lampText.classList.toggle('text-white', isOn);
  lampText.classList.toggle('text-black', !isOn);
  description.classList.toggle('text-white', isOn);
  description.classList.toggle('text-black', !isOn);
  clickEl.classList.toggle('text-white', isOn);
  clickEl.classList.toggle('text-black', !isOn);
  copyright.classList.toggle('text-black',!isOn);
  copyright.classList.toggle('text-white',isOn)
  author.classList.toggle('text-black',!isOn);
  author.classList.toggle('text-white',isOn)
}

lamp.addEventListener('click', toggleLamp);