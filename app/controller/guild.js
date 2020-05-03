'use strict';

const Controller = require('egg').Controller;


class GuildController extends Controller {
  //公会详情
  async guildInfo() {
    const { ctx } = this;
	// const data = ctx.request.body;
	// console.log(data)
	let datas =  await ctx.model.Guild.findOne({where:{id:1},raw:true})
	let user = await ctx.model.User.findOne({where:{id:parseInt(datas.guildCreateID)},raw:true})
	// let userNum = await ctx.model.User.findAll({
	// 		attributes: [['count(*)', 'count'], 'id'],
	// 	    group: 'id',
	// 	    order: [['count', 'desc']],
	// 	    raw: true
	// })
	const res = await ctx.model.User.findAndCountAll();
	console.log(datas,'公会')
	console.log(res.count,'数量')
	datas.userNum = res.count
	console.log(user,'会长')
	let data = {
		guild:datas,
		user:user
	}
    ctx.body = {
      code: 200,
      data: data,
      message: 'success',
    };
	return ctx
  }
}

module.exports = GuildController;
