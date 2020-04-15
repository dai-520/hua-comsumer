/* eslint valid-jsdoc: "off" */

'use strict';
require('babel-register')({
  plugins: [
    'transform-decorators-legacy',
  ],
});
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = appInfo.name + '_1558595032295_9433';
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
    },
  };
   // egg cluster config
  config.cluster = {
    listen: {
      port: 8081,
      hostname: '127.0.1.1',
    },
  };
    // mysql config
    config.sequelize = {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      // database: 'rms-inspection',
      // database: 'module-inspection',
      database: 'wis_backend',
       host: '10.168.1.110',
      // host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'dai123',
      password:'WTqazxsw$1',
      timezone: '+08:00',
      define: {
        freezeTableName: true,
        underscored: true,
        timestamps: false,
      },
  
    };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.eggExtend={
     agent:false,
    //  app:true,
    name:"",
    discovery: {
      serverAddr: "10.168.1.110:8848"
    }
  }

  return {
    ...config,
    // ...userConfig,
  };
};
