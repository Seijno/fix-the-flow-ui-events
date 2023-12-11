let interaction = document.getElementById('design')

interaction.addEventListener('dblclick', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let backgroundChange = document.getElementById('frontend');
backgroundChange.addEventListener('click', change );
function change(){
  backgroundChange.classList.toggle('change');
}

let down = document.getElementById('and');
down.addEventListener('mousemove', sink );
function sink(){
  down.classList.toggle('sink');
}

let development = document.querySelector('#development');
development.addEventListener('mouseleave', jump);
function jump() {
  development.classList.toggle('jump')
}

let sprint5 = document.querySelector('#sprint5');
sprint5.addEventListener('mouseenter', jumpenter);
function jumpenter() {
  sprint5.classList.toggle('jump')
}

let fix = document.querySelector('#fix');
fix.addEventListener('mousedown', jumpdown);
function jumpdown() {
  fix.classList.toggle('jump')
}

let the = document.querySelector('#the');
the.addEventListener('mouseout', jumpout);
function jumpout() {
  the.classList.toggle('jump')
}

let flow = document.querySelector('#flow');
flow.addEventListener('mouseup', jumpup);
function jumpup() {
  flow.classList.toggle('jump')
}

let user = document.querySelector('#user');
user.addEventListener('keydown', jumpkey);
function jumpkey() {
  user.classList.toggle('jump')
}

let interface = document.querySelector('#interface');
interface.addEventListener('pointermove', jumppointer);
function jumppointer() {
  interface.classList.toggle('jump')
}