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
const COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];
const EYES_COLOR = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const setup = document.querySelector(`.setup`);
const similarWizards = setup.querySelector(`.setup-similar`);
const similarWizardsList = setup.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// setup.classList.remove(`hidden`);
// similarWizards.classList.remove(`hidden`);

const showElement = function (element) {
  element.classList.remove(`hidden`);
};

const getRandomData = function (name) {
  return name[Math.floor(Math.random() * name.length)];
};

const wizards = [
  {
    name: getRandomData(NAMES) + ` ` + getRandomData(SURNAMES),
    coatColor: getRandomData(COAT_COLOR),
    eyesColor: getRandomData(EYES_COLOR)
  },
  {
    name: getRandomData(NAMES) + ` ` + getRandomData(SURNAMES),
    coatColor: getRandomData(COAT_COLOR),
    eyesColor: getRandomData(EYES_COLOR)
  },
  {
    name: getRandomData(NAMES) + ` ` + getRandomData(SURNAMES),
    coatColor: getRandomData(COAT_COLOR),
    eyesColor: getRandomData(EYES_COLOR)
  },
  {
    name: getRandomData(NAMES) + ` ` + getRandomData(SURNAMES),
    coatColor: getRandomData(COAT_COLOR),
    eyesColor: getRandomData(EYES_COLOR)
  }
];

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
  similarWizardsList.appendChild(fragment);
  return;
};

createElement(wizards);

showElement(setup);
showElement(similarWizards);


// - функцию, которая принимает массив данных и возвращает фрагмент со всеми магами
// - функцию init, которая генерит массив данных, генерит фрагмент,
// добавляет фрагмент в верстку и снимет классы hidden
