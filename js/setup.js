"use strict";

const setup = document.querySelector(`.setup`);
const similarWizards = setup.querySelector(`.setup-similar`);
const simirarWizardsList = setup.querySelector(`.setup-similar-list`);
const similarWizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

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

setup.classList.remove(`hidden`);
similarWizards.classList.remove(`hidden`);

const wizards = [
  {
    name: NAMES[Math.floor(Math.random() * NAMES.length)] + ` ` + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  },
  {
    name: NAMES[Math.floor(Math.random() * NAMES.length)] + ` ` + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  },
  {
    name: NAMES[Math.floor(Math.random() * NAMES.length)] + ` ` + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  },
  {
    name: NAMES[Math.floor(Math.random() * NAMES.length)] + ` ` + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  }
];

for (let i = 0; i < wizards.length; i++) {
  let wizardElement = similarWizardsTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;

  simirarWizardsList.appendChild(wizardElement);
}

// ГОТОВО:
// 1 Покажите блок.setup, убрав в JS - коде у него класс hidden.
// 2 Создайте массив, состоящий из 4 - х сгенерированных JS объектов, которые будут описывать похожих персонажей.Объекты должны содержать следующие поля:
// name, строка — случайно сгенерированное имя персонажа.Имя генерируется из массивов имён и фамилий: нужно случайным образом выбрать из массива имён имя,
// а из массива фамилий фамилию и сложить их.При желании имя и фамилию можно в случайном порядке менять местами:
// coatColor, строка — случайный цвет мантии на выбор из следующих:
// eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:
// 4 Отрисуйте сгенерированные DOM - элементы в блок.setup - similar - list.Для вставки элементов используйте DocumentFragment.
// 5 Покажите блок.setup - similar, удалив у него CSS - класс hidden.
// 3 На основе данных, созданных в предыдущем пункте и шаблона #similar - wizard - template создайте DOM - элементы, соответствующие случайно
// сгенерированным волшебникам, и заполните их данными из массива:
// имя персонажа name запишите как текст в блок.setup - similar - label;
// цвет мантии coatColor задайте как цвет заливки fill в стилях элемента.wizard - coat;
// цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента.wizard - eyes.
