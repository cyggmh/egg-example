'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
	const data = ctx.request.query;
	console.log(data)
	// await ctx.model.User.create({name:'姓名1'})  // 先创建一条数据
	let datas =  await ctx.model.User.findAll({where:{id:data.id},raw:true})
	// let datas = await ctx.model.User.findOne({where: {id: userInfo.buy_store_id}})
	console.log(datas,'用户信息')
    ctx.body = {
      code: 200,
      data: datas,
      message: 'success',
    };
	return ctx
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
