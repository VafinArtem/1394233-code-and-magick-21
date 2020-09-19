"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 30;
const CLOUD_Y = 140;
const GAP = 50;
const FONT_GAP = 20;
const TEXT_HEIGHT = 16;
const BAR_WIDTH = 40;
const barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;

const renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const textField = function (ctx, description, x, y) {
  ctx.fillText(description, x, y);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, "rgba(0, 0, 0, 0.7)", 110, 20);
  renderCloud(ctx, "#fff", 100, 10);

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  textField(ctx, "Ура вы победили!", 120, 30);
  textField(ctx, "Список результатов:", 120, 50);

  let playerIndex = 0;
  let playerName = 'Вы';

  textField(ctx, playerName, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, CLOUD_HEIGHT - FONT_GAP);
  ctx.save();
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  ctx.fillRect(CLOUD_X, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, barHeight, BAR_WIDTH);
  ctx.restore();

  playerIndex = 1;
  playerName = 'Кекс';

  textField(ctx, playerName, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, CLOUD_HEIGHT - FONT_GAP);
  ctx.save();
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#000";
  ctx.fillRect(CLOUD_X, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, barHeight, BAR_WIDTH);
  ctx.restore();

  playerIndex = 2;
  playerName = 'Катя';

  textField(ctx, playerName, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, CLOUD_HEIGHT - FONT_GAP
  );
  ctx.save();
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#000";
  ctx.fillRect(CLOUD_X, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, barHeight, BAR_WIDTH);
  ctx.restore();

  playerIndex = 3;
  playerName = 'Игорь';

  textField(ctx, playerName, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, CLOUD_HEIGHT - FONT_GAP
  );
  ctx.save();
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#000";
  ctx.fillRect(CLOUD_X, CLOUD_Y + (GAP + BAR_WIDTH) * playerIndex, barHeight, BAR_WIDTH);
  ctx.restore();
};
