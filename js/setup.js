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
const HEROES_AMOUNT = 4;

const setupNode = document.querySelector(`.setup`);
const setupOpenButton = document.querySelector(`.setup-open`);
const setupCloseButton = setupNode.querySelector(`.setup-close`);
const wizardCoat = setupNode.querySelector(`.wizard-coat`);
const wizardCoatInput = setupNode.querySelector(`input[name="coat-color"]`);
const wizardEyes = setupNode.querySelector(`.wizard-eyes`);
const wizardEyesInput = setupNode.querySelector(`input[name="eyes-color"]`);
const userNameSetup = setupNode.querySelector(`.setup-user-name`);
const similarWizards = setupNode.querySelector(`.setup-similar`);
const similarWizardsList = setupNode.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setupNode.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);

  userNameSetup.addEventListener(`focus`, function () {
    document.removeEventListener(`keydown`, onPopupEscPress);
  });

  userNameSetup.addEventListener(`blur`, function () {
    document.addEventListener(`keydown`, onPopupEscPress);
  });

  wizardCoat.addEventListener(`click`, function () {
    const colorCoat = wizardCoat.style.fill = getRandomData(COATS_COLORS);
    wizardCoatInput.value = colorCoat;
  });

  wizardEyes.addEventListener(`click`, function () {
    const colorEyes = wizardEyes.style.fill = getRandomData(EYES_COLORS);
    wizardEyesInput.value = colorEyes;
  });
};

const closePopup = function () {
  setupNode.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
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


const showElement = function (element) {
  element.classList.remove(`hidden`);
};

const getRandomData = function (arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

const createDataArray = function (numbers) {
  const array = [];
  for (let i = 0; i < numbers; i++) {
    array.push({
      name: `${getRandomData(NAMES)} ${getRandomData(SURNAMES)}`,
      coatColor: getRandomData(COATS_COLORS),
      eyesColor: getRandomData(EYES_COLORS)
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

  // showElement(setupNode);
  showElement(similarWizards);
};

initWizardScreen();
