import { showNavigation, closeNavigation } from "./burger_menu.js";
import {
  fillArrays,
  clickButtonTea,
  clickButtonDesert,
  clickButtonCoffee,
  openCardsMedia,
} from "./load_goods.js";
import { showActiveModalWindow, closeModalWindow } from "./modal.js";
showNavigation();
closeNavigation();
fillArrays();
clickButtonTea();
clickButtonDesert();
clickButtonCoffee();
openCardsMedia();
showActiveModalWindow();
closeModalWindow();
