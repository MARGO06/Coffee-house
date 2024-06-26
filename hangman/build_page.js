import {
  wrapperPage,
  illustrationImage,
  illustrationHeightPart,
  illustrationMiddlePart,
  illustrationFooterPart,
  wrapperIllustration,
  quizGame,
  quizAnswer,
  quizCount,
  row,
  keyboard,
  personBody,
  modalWindow,
  backgroundModalWindow,
} from "./components/wrapper.js";
import { illustrationParts, bodyParts } from "./components/illustration.js";
import {
  nameGame,
  nameCount,
  textModal,
  resultModal,
  answerModal,
  buttonModal,
} from "./components/text.js";
import { answer, wholeQuiz } from "./components/quiz.js";
import { counts } from "./components/count.js";
import { keyboardsLetters } from "./components/keyboard.js";

const wrapper = wrapperPage.appendTo(document.body);
//create illustration
const illustrationWrapper = wrapperIllustration.appendTo(wrapper);
const illustration = illustrationImage.appendTo(illustrationWrapper);
illustrationHeightPart.appendTo(illustration);
const illustrationMiddle = illustrationMiddlePart.appendTo(illustration);
illustrationParts.appendTo(illustrationMiddle);
illustrationFooterPart.appendTo(illustration);

//name game
nameGame.appendTo(illustrationWrapper);

//create quiz
const quiz = quizGame.appendTo(wrapper);
export const answerEmpty = quizAnswer.appendTo(quiz);
wholeQuiz.appendTo(answerEmpty, answer);
wholeQuiz.appendToQuestion(quiz, answer);

//create score
const score = quizCount.appendTo(quiz);
nameCount.appendTo(score);
counts.appendTo(score);

// create keyboard
const keyboardLet = keyboard.appendTo(quiz);
const keyRow = row.appendTo(keyboardLet);
keyboardsLetters.appendTo(keyRow);
keyboardsLetters.pressButton();
keyboardsLetters.upButton();
keyboardsLetters.putMouse();
keyboardsLetters.upMouse();

//create person
const bodyPerson = personBody.appendTo(illustrationMiddle);
bodyParts.appendTo(bodyPerson);

//create modal window

const modal = modalWindow.appendTo(wrapper);
backgroundModalWindow.appendTo(wrapper);
textModal.appendTo(modal);
resultModal.appendTo(modal);
answerModal.appendTo(modal);
buttonModal.appendTo(modal);

export { wrapper };
