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
const userNameSetup = setupNode.querySelector(`.setup-user-name`);
const similarWizards = setupNode.querySelector(`.setup-similar`);
const similarWizardsList = setupNode.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const Wizard = {
  COAT: setupNode.querySelector(`.wizard-coat`),
  COAT_INPUT: setupNode.querySelector(`input[name="coat-color"]`),
  EYES: setupNode.querySelector(`.wizard-eyes`),
  EYES_INPUT: setupNode.querySelector(`input[name="eyes-color"]`),
  FIREBALL: setupNode.querySelector(`.setup-fireball-wrap`),
  FIREBALL_INPUT: setupNode.querySelector(`input[name="fireball-color"]`)
};

const KeyboardKeys = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

const onPopupEscPress = function (evt) {
  if (evt.key === KeyboardKeys.ESCAPE && document.activeElement !== userNameSetup) {
    evt.preventDefault();
    closePopup();
  }
};

const onWizardCoatClick = function () {
  changeElementColor(Wizard.COAT, Wizard.COAT_INPUT, `fill`, COATS_COLORS);
};

const onWizardEyesClick = function () {
  changeElementColor(Wizard.EYES, Wizard.EYES_INPUT, `fill`, EYES_COLORS);
};

const onWizardFireballClick = function () {
  changeElementColor(Wizard.FIREBALL, Wizard.FIREBALL_INPUT, `background-color`, FIREBALL_COLORS);
};

const getRandomArrElement = function (arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

const changeElementColor = function (element, input, styleProperty, colorsArray) {
  const color = getRandomArrElement(colorsArray);
  element.style[styleProperty] = color;
  input.value = color;
};

const openPopup = function () {
  setupNode.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
  Wizard.COAT.addEventListener(`click`, onWizardCoatClick);
  Wizard.EYES.addEventListener(`click`, onWizardEyesClick);
  Wizard.FIREBALL.addEventListener(`click`, onWizardFireballClick);
};

const closePopup = function () {
  setupNode.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
  Wizard.COAT.removeEventListener(`click`, onWizardCoatClick);
  Wizard.EYES.removeEventListener(`click`, onWizardEyesClick);
  Wizard.FIREBALL.removeEventListener(`click`, onWizardFireballClick);
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

setupOpenButton.addEventListener(`click`, openPopup);

setupOpenButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === KeyboardKeys.ENTER) {
    openPopup();
  }
});

setupCloseButton.addEventListener(`click`, closePopup);

setupCloseButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === KeyboardKeys.ENTER) {
    setupNode.classList.add(`hidden`);
  }
});

initWizardScreen();
