"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 25;
const CLOUD_Y = 140;
const GAP = 50;
const FONT_GAP = 20;
const TEXT_HEIGHT = 10;
const BAR_WIDTH = 40;
const barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;
const PLAYER_COLOR = "rgba(255, 0, 0, 1)";
const PLAYERS_COLOR = ["rgba(255, 50, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 255, 150, 1)", "rgba(255, 100, 100, 1)"];

const renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const textField = function (ctx, description, x, y) {
  ctx.fillText(description, x, y);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, "rgba(0, 0, 0, 0.7)", 110, 20);
  renderCloud(ctx, "#fff", 100, 10);

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  textField(ctx, "Ура вы победили!", 120, 30);
  textField(ctx, "Список результатов:", 120, 50);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    textField(ctx, players[i], CLOUD_Y + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.save();
    ctx.translate(0, CLOUD_HEIGHT);
    ctx.rotate(-Math.PI / 2);
    if (players[i] === "Вы") {
      ctx.fillStyle = PLAYER_COLOR;
    } else {
      ctx.fillStyle = PLAYERS_COLOR[i];
    }
    ctx.fillRect(CLOUD_X, CLOUD_Y + (GAP + BAR_WIDTH) * i, (barHeight * times[i]) / maxTime, BAR_WIDTH);
    ctx.restore();
    textField(ctx, Math.round(times[i]), CLOUD_Y + (GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - FONT_GAP * 2) - (barHeight * times[i]) / maxTime);
  }
};
