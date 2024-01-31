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
  choseNonogram2,
  choseNonogram3,
  paintCellField,
} from "./event_nonogram.js";
wrapper;
paintCellField();
clickRightMouse();
resetGame();
clickNonogramSound();
savePlay();
continueGame();
closeCongratulations();
showRightAnswer();
choseNonogram2();
choseNonogram3();
