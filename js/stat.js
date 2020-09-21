"use strict";

const cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 25,
  Y: 140
};
const COLUMN_GAP = 50;
const FONT_GAP = 20;
const TEXT_HEIGHT = 10;
const BAR_WIDTH = 40;
const barHeight = cloud.HEIGHT - COLUMN_GAP - TEXT_HEIGHT - COLUMN_GAP;
const PLAYER_COLOR = `rgba(255, 0, 0, 1)`;

const renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloud.WIDTH, cloud.HEIGHT);
};

const textField = function (ctx, description, x, y) {
  ctx.fillText(description, x, y);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, `rgba(0, 0, 0, 0.7)`, 110, 20);
  renderCloud(ctx, `#fff`, 100, 10);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  textField(ctx, `Ура вы победили!`, 120, 30);
  textField(ctx, `Список результатов:`, 120, 50);

  const maxTime = Math.max(...times);

  for (let i = 0; i < players.length; i++) {
    textField(ctx, players[i], cloud.Y + (COLUMN_GAP + BAR_WIDTH) * i, cloud.HEIGHT - FONT_GAP);
    ctx.save();
    ctx.translate(0, cloud.HEIGHT);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = players[i] === `Вы` ? PLAYER_COLOR : `hsla(240,` + Math.floor(Math.random() * 100) + `%, 50%, 1)`;
    ctx.fillRect(cloud.X, cloud.Y + (COLUMN_GAP + BAR_WIDTH) * i, (barHeight * times[i]) / maxTime, BAR_WIDTH);
    ctx.restore();
    textField(ctx, Math.round(times[i]), cloud.Y + (COLUMN_GAP + BAR_WIDTH) * i, (cloud.HEIGHT - FONT_GAP * 2) - (barHeight * times[i]) / maxTime);
  }
};
