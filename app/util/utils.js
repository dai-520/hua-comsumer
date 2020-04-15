
var moment = require('moment');
async function findJob(myqueue, id) {
    let myJob = undefined;
    const jobs = await myqueue.getDelayed();
    for (let job of jobs) {
        if (job.data.id == id) {
            myJob = job;
            break;
        }
    }
    return myJob;
};
exports.dealRadis = async (myqueue,data,app) =>{
    myqueue.add(data.id+"",data, {
        removeOnComplete: true,
        repeat: {
            cron: data.cron,
            startDate: data.startDate
        }
    }).then((myJob) => {
        myqueue.process(myJob.data.id+ "" ,async (job, done) => {
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk",job.data)
                var stTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                const InspectJobObj = { remarks: job.data.remarks, startDate: stTime,recipientId:job.data.recipientId,
                    limitHours:job.data.limitHours,inspectorId: job.data.inspectorIds,routeId:job.data.routeId,deviceList:job.data.deviceList}    
                console.log("lllllllllllllllllllll",InspectJobObj)
                 app.model.WisJob.create(InspectJobObj)
            done()
           })
     })
}
/**
 * fuck
 * @param {Date} date
 */
exports.formatDate = date => {
    if (date) return moment(date).format('YYYY-MM-DD HH:mm:ss')
    else return null
  }
