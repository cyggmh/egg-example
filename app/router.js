'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/home', controller.home.index);
  router.post('/userInfo', controller.home.userInfo);
};
