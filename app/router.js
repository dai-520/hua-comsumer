'use strict';
const routerDecorator = require('egg-extend/router_decorator');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  routerDecorator.initRouter(app);
  router.resources('wisJob', '/wisJob', controller.wisJob);
  router.resources('wisRegular', '/wisRegular', controller.wisRegular);
};
