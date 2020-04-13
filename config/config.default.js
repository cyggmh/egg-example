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
    domainWhiteList: ['http://127.0.0.1:8081', 'http://127.0.0.1:8082','http://127.0.0.1:1024','http://10.1.1.101:8080',"https://192.168.137.1:8080"]
}
  
config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
exports.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    database: "egg",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "cyggmh",
    timezone: '+08:00',
    // define: {
    //     schema: "",
    //     benchmark: true,
    //     logging: true
    // },
    pool: {
        min: 0,
        max: 500,
        idle: 10000,
        acquire: 100000,
        evict: 10000,
        handleDisconnects: true
    },
};

// config.mysql={
//     //database configuration 
//     client:{
//         //host 
//         host:'localhost',
//         //port 
//         port:'3306',
//         //username 
//         user:'root',
//         //password 
//         password:'cyggmh',
//         //database 
//         database:'egg'
//     },
//     //load into app,default is open //加载到应用程序，默认为打开
//     app:true,
//     //load into agent,default is close //加载到代理中，默认值为“关闭”
//     agent:false,
// };
  return {
    ...config,
    ...userConfig,
  };
};
