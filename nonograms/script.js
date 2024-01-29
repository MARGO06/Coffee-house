import { wrapper } from "./build_nonogram.js";
import {
  paintCellField,
  clickRightMouse,
  resetGame,
  clickNonogramSound,
  savePlay,
  continueGame,
  closeCongratulations,
  showRightAnswer,
  choseNonogram,
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
choseNonogram();
