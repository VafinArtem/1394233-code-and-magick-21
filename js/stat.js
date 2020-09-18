"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx) {
  renderCloud(ctx, `rgba(0, 0, 0, 0.7)`, 110, 20);
  renderCloud(ctx, `#fff`, 100, 10);
};
