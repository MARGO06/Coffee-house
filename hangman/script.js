import { wrapper } from "./build_page.js";
import {
  putButton,
  upButton,
  putMouse,
  upMouse,
  showLetter,
  answerLetters,
} from "./event_keyboard.js";
import { playAgain } from "./modal.js";
wrapper;
playAgain();
putButton();
upButton();
putMouse();
upMouse();
showLetter();
