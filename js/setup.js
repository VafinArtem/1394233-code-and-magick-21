"use strict";

const NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];
const SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const COATS_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];
const EYES_COLORS = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const FIREBALL_COLORS = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];
const HEROES_AMOUNT = 4;

const setupNode = document.querySelector(`.setup`);
const setupOpenButton = document.querySelector(`.setup-open`);
const setupCloseButton = setupNode.querySelector(`.setup-close`);
const wizardCoat = setupNode.querySelector(`.wizard-coat`);
const wizardCoatInput = setupNode.querySelector(`input[name="coat-color"]`);
const wizardEyes = setupNode.querySelector(`.wizard-eyes`);
const wizardEyesInput = setupNode.querySelector(`input[name="eyes-color"]`);
const fireBall = setupNode.querySelector(`.setup-fireball-wrap`);
const fireBallInput = fireBall.querySelector(`input[name="fireball-color"]`);
const userNameSetup = setupNode.querySelector(`.setup-user-name`);
const similarWizards = setupNode.querySelector(`.setup-similar`);
const similarWizardsList = setupNode.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomArrElement = function (arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const changeColorElement = function (element, input, styleProperty, colorsArray) {
  const color = getRandomArrElement(colorsArray);
  element.style[styleProperty] = color;
  input.value = color;
};

const getFocusOnInput = function () {
  userNameSetup.addEventListener(`focus`, function () {
    document.removeEventListener(`keydown`, onPopupEscPress);
  });

  userNameSetup.addEventListener(`blur`, function () {
    document.addEventListener(`keydown`, onPopupEscPress);
  });
};

const changeColorWizardOnClick = function () {
  wizardCoat.addEventListener(`click`, function () {
    changeColorElement(wizardCoat, wizardCoatInput, `fill`, COATS_COLORS);
  });

  wizardEyes.addEventListener(`click`, function () {
    changeColorElement(wizardEyes, wizardEyesInput, `fill`, EYES_COLORS);
  });

  fireBall.addEventListener(`click`, function () {
    changeColorElement(fireBall, fireBallInput, `backgroundColor`, FIREBALL_COLORS);
  });
};

const openPopup = function () {
  setupNode.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);

  getFocusOnInput();

  changeColorWizardOnClick();
};

const closePopup = function () {
  setupNode.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

const showElement = function (element) {
  element.classList.remove(`hidden`);
};

const createDataArray = function (numbers) {
  const array = [];
  for (let i = 0; i < numbers; i++) {
    array.push({
      name: `${getRandomArrElement(NAMES)} ${getRandomArrElement(SURNAMES)}`,
      coatColor: getRandomArrElement(COATS_COLORS),
      eyesColor: getRandomArrElement(EYES_COLORS)
    });
  }

  return array;
};

const renderWizard = function (wizard) {
  let wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const createElement = function (wizard) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizard.length; i++) {
    fragment.appendChild(renderWizard(wizard[i]));
  }

  return fragment;
};

const addElement = function (element) {
  similarWizardsList.appendChild(element);
};

const initWizardScreen = function () {
  const wizardsDataArray = createDataArray(HEROES_AMOUNT);
  const wizardNodesFragment = createElement(wizardsDataArray);

  addElement(wizardNodesFragment);

  showElement(similarWizards);
};

setupOpenButton.addEventListener(`click`, function () {
  openPopup();
});

setupOpenButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupCloseButton.addEventListener(`click`, function () {
  closePopup();
});

setupCloseButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    setupNode.classList.add(`hidden`);
  }
});

initWizardScreen();
