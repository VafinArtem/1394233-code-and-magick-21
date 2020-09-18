"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

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
};