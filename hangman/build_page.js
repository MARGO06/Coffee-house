const wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.append(wrapper);

//create illustration
const illustration = document.createElement("div");
illustration.className = "illustration";
wrapper.append(illustration);

const part1 = document.createElement("div");
part1.className = "part illustration__part1";
illustration.append(part1);

const part2 = document.createElement("div");
part2.className = "part illustration__part2";
illustration.append(part2);

const insidePart1 = document.createElement("div");
insidePart1.className = "part illustration__part2.1";
part2.append(insidePart1);

const insidePart2 = document.createElement("div");
insidePart2.className = "part illustration__part2.2";
part2.append(insidePart2);

const insidePart3 = document.createElement("div");
insidePart3.className = "part illustration__part2.3";
part2.append(insidePart3);

const part3 = document.createElement("div");
part3.className = "part illustration__part3";
illustration.append(part3);

const callGame = document.createElement("p");
callGame.className = "illustration__text";
callGame.innerHTML = "HANGMAN GAME";
illustration.append(callGame);

export { wrapper };
