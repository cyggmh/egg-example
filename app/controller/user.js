'use strict';

const Controller = require('egg').Controller;


class UserController extends Controller {
	//用户列表
  async userList() {
    const { ctx } = this;
	const data = ctx.request.body;
	// console.log(ctx)
	console.log(data)
	const where = {}
	if(data.name){
		where.name = { $like: '%' + data.name + '%' }
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	// await ctx.model.User.create({name:'姓名1'})  // 先创建一条数据
	let datas =  await ctx.model.User.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	// let datas = await ctx.model.User.findOne({where: {id: userInfo.buy_store_id}})
	console.log(datas,'用户信息')
    ctx.body = {
      code: 200,
      data: {
		  records:datas,
		  total:datas.lenght,
		  size:data.pageSize,
		  current:data.pageNo,
		  orders: [],
		  searchCount: true,
		  pages:data.pageNo
	  },
      message: 'success',
    };
	return ctx
  }
  //用户详情
  async userInfo() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.User.findOne({where:{id:data.id},raw:true})
	console.log(datas,'用户信息')
    ctx.body = {
      code: 200,
      data: datas,
      message: 'success',
    };
	return ctx
  }
}

module.exports = UserController;
