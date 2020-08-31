var mainbox = document.querySelector('#container');
var text1 = document.querySelector('#text1');
var text2 = document.querySelector('#text2');

function cursorfollow(e, mainbox) {
  var con = mainbox.getBoundingClientRect();
  var x = ((e.pageX - con.x) * 0.5);
  text1.style.transform = `translate(${x}px,0)`;
  text2.style.transform = `translate(${x}px,0)`;
}

mainbox.addEventListener('mousemove', (e) => {
  setInterval(cursorfollow(e, mainbox), 1000);
});