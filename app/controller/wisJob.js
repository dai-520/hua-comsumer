'use strict';
const Controller = require('egg-extend');
class WisJobController extends Controller {
  get model() {
    const {ctx} = this
    return ctx.model.WisJob
  }
  async create(){
    const { ctx } = this;
    const mInspectorId = ctx.request.body.inspectorId.split(";")
    mInspectorId.forEach(async node => {
      Object.assign(ctx.request.body,{inspectorId:node})
      await ctx.model.WisJob.create(ctx.request.body)
    });
  }
}
module.exports = WisJobController;

