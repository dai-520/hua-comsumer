'use strict';
const Controller = require('egg-extend');
class WisRegularController extends Controller {
  get model() {
    const {ctx} = this
    return ctx.model.WisRegular
  }
}
module.exports = WisRegularController;

