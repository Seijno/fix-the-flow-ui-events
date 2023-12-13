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
development.addEventListener('mouseleave', rotateRight);
function rotateRight() {
  development.classList.toggle('rotateRight')
}

let sprint5 = document.querySelector('#sprint5');
sprint5.addEventListener('mouseenter', away);
function away() {
  sprint5.classList.toggle('away')
}

let fix = document.querySelector('#fix');
fix.addEventListener('mousedown', jumpdown);
function jumpdown() {
  fix.classList.toggle('jump')
}

let the = document.querySelector('#the');
the.addEventListener('mouseout', bigBoy);
function bigBoy() {
  the.classList.toggle('bigBoy')
}

let flow = document.querySelector('#flow');
flow.addEventListener('mouseup', color);
function color() {
  flow.classList.toggle('colorChange')
}

let user = document.querySelector('#user');
user.addEventListener('keydown', rotateLeft);
function rotateLeft() {
  user.classList.toggle('rotateLeft')
}

let interface = document.querySelector('#interface');
interface.addEventListener('pointermove', jumppointer);
function jumppointer() {
  interface.classList.toggle('borderGone')
}