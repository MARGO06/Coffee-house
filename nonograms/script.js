import { wrapper, leftDates, topDate, datesField } from "./build_nonogram.js";
import {
  paintCellField,
  clickRightMouse,
  resetGame,
  clickNonogramSound,
} from "./event_nonogram.js";
wrapper;
leftDates;
topDate;
datesField;
paintCellField();
//showCongratulations();
clickRightMouse();
resetGame();
clickNonogramSound();
