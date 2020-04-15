const Queue = require("bull");
const consumer = require("./consumer")
var config = require('../util/config')
let redisUrl = `redis://${config.config.host}:${config.config.port}/${config.config.db}`
var myqueue = new Queue('winston', redisUrl, { prefix: 'wt' });
var dealRadis = require('./utils')
const result = {
    start: async function (app) {
        const  data  =  await  app.model.WisRegular.findAll({})
        for (let node of data) {
            dealRadis.dealRadis(myqueue,node,app);         
        }
         consumer.consumer(myqueue,app)
    }
};


module.exports = result;