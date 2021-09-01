"use strict";

window.addEventListener("load", start);

const textElement = document.querySelector("#typewriter").textContent;
const sound1 = document.querySelector("#typekey1");
const sound2 = document.querySelector("#typekey2");
const randomSounds = [sound1, sound2];
const soundCheck = document.querySelector("#sound-check");

let iterator;
let maxNumberOfIteration;
let text;

function start() {
  maxNumberOfIteration = textElement.length + 1;
  // console.log(maxNumberOfIteration);
  iterator = 0;
  loop();
}

function loop() {
  iterator++;
  if (iterator < maxNumberOfIteration) {
    text = textElement.slice(0, iterator);

    if (soundCheck.checked) {
      if (iterator === maxNumberOfIteration - 1) {
        console.log("play last");
        document.querySelector("#typelast").play();
      }

      let newChar = text.charAt(iterator - 1);

      switch (newChar) {
        case " ":
          document.querySelector("#typespace").play();
          break;
        default:
          randomSounds[getRandomSound()].play();
      }
    }

    setTimeout(loop, getRandomDelay());
    document.querySelector("#typewriter").innerHTML = text.trim();
  } else {
    if (soundCheck.checked) {
      console.log("play return");
      document.querySelector("#typereturn").play();
    }
  }
}

function getRandomSound() {
  const index = Math.floor(Math.random() * 2);
  // console.log(index);
  return index;
}

function getRandomDelay() {
  const delay = Math.floor((Math.random() + 0.8) * 170);
  // console.log(delay);
  return delay;
}
