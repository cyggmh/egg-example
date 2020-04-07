'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
	const data = ctx.request.query;
	console.log(data)
    ctx.body = {
      code: 0,
      data: {
		  id:data.id,
		  code:'成功'
	  },
      message: 'success',
    };
  }
  async userInfo() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	if(data.id != 0 ||data.id != null || data.id != undefined){
		ctx.body = {
		  code: 0,
		  data: {
			  id:data.id,
			  name:'鱼鱼鱼',
			  sex:'男',
			  age:'21'
		  },
		  message: 'success',
		};
	}else{
		ctx.body = {
		  code: 400,
		  data: '用户名不存在',
		  message: 'failed',
		};
	}
  }
}

module.exports = HomeController;
