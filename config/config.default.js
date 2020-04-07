/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586247051731_3128';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
exports.security = {
    csrf: {
        enable: false,
        // ignore: ["/api", '/editorUpload', '/w', '/p']
    },
    domainWhiteList: ['http://127.0.0.1:8081', 'http://127.0.0.1:8082','http://127.0.0.1:1024','http://10.1.1.101:8080']
}
  
config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
  return {
    ...config,
    ...userConfig,
  };
};
