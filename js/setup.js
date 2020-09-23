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
const PLAYERS_AMOUNT = 4;

const setupNode = document.querySelector(`.setup`);
const similarWizards = setupNode.querySelector(`.setup-similar`);
const similarWizardsList = setupNode.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const showElement = function (element) {
  element.classList.remove(`hidden`);
};

const getRandomData = function (arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

const createDataArray = function (numbers) {
  const array = [];
  for (let i = 0; i < numbers; i++) {
    array.push(
        {
          name: `${getRandomData(NAMES)} ${getRandomData(SURNAMES)}`,
          coatColor: getRandomData(COATS_COLORS),
          eyesColor: getRandomData(EYES_COLORS)
        }
    );
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

  return similarWizardsList.appendChild(fragment);
};

createElement(createDataArray(PLAYERS_AMOUNT));

showElement(setupNode);
showElement(similarWizards);
