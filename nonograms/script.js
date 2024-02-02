import { wrapper } from "./build_nonogram.js";

import {
  //clickLeftCell,
  clickRightMouse,
  resetGame,
  clickNonogramSound,
  savePlay,
  continueGame,
  closeCongratulations,
  showRightAnswer,
  choseNonogram3,
} from "./event_nonogram.js";
wrapper;

clickRightMouse();
resetGame();
clickNonogramSound();
savePlay();
continueGame();
closeCongratulations();
showRightAnswer();
choseNonogram3();
