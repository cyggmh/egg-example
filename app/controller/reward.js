'use strict';

const Controller = require('egg').Controller;
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

class RewardController extends Controller {
  //公会奖励列表
  async rewardList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where ={}
	if(data.rewardName){
		where.rewardName = { $like: '%' + data.rewardName + '%' }
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.Reward.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	// let userNum = await ctx.model.User.findAll({
	// 		attributes: [['count(*)', 'count'], 'id'],
	// 	    group: 'id',
	// 	    order: [['count', 'desc']],
	// 	    raw: true
	// })
	console.log(datas,'奖励列表')
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
  // 公会奖励详情
  async rewardInfo() {
    const { ctx } = this;
	const data = ctx.request.body;
	// console.log(data)
	let datas =  await ctx.model.Reward.findOne({where:{id:data.id},raw:true})
    ctx.body = {
      code: 200,
      data: datas,
      message: 'success',
    };
	return ctx
  }
  // 公会奖励新增
  async rewardAdd() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	// delete data.id
	// data.taskSpend = parseInt(data.taskSpend)
	console.log(data)
	let datas =  await ctx.model.Reward.create(data)
	console.log(datas.dataValues)
	if(datas.dataValues != undefined ||datas.dataValues != null){
		ctx.body = {
		  code: 200,
		  message: 'success',
		};
	}else{
		ctx.body = {
		  code: 500,
		  message: 'failed',
		};
	}
	return ctx
	  
  }
  // 公会奖励更新
  async rewardUpdate() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.Reward.update(data,{where:{id:data.id},raw:true})
	// console.log(datas == 0)
	if(datas == 1){
		ctx.body = {
		  code: 200,
		  message: 'success',
		};
	}else if(datas == 0){
		ctx.body = {
		  code: 500,
		  message: 'failed',
		};
	}
	return ctx
	
	  
  }
  // 公会奖励删除
  async rewardDel() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	  
  }
  // 公会奖励生成兑换码
  async rewardCode() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.Reward.findOne({where:{id:data.id},raw:true})
	console.log(datas)
	for (var i = 0; i < data.num; i++) {
		let code = data.id + i + uuidv5(ctx.helper.randomNumber(4), uuidv5.DNS)
			await ctx.model.Code.create({
				exchangeCode:code,
				guildRewardId:datas.id,
				guildRewardName:datas.rewardName,
				state:0 //1为使用 0为未使用
			})
	}
    ctx.body = {
      code: 200,
      data: '生成成功',
      message: 'success',
    };
	return ctx	  
  }
  // 公会奖励兑换码列表
  async rewardCodeList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where ={}
	if(data.guildRewardName){
		where.guildRewardName = { $like: '%' + data.guildRewardName + '%' }
	}
	if(data.state){
		if(data.state == ''){
			where.state = { $like: '%' + data.state + '%' }
		}else{
			where.state = parseInt(data.state)
		}
		
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.Code.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	console.log(datas)
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
  // 公会奖励兑换码使用记录列表
  async rewardUseCodeList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where ={}
	if(data.guildRewardName){
		where.guildRewardName = { $like: '%' + data.guildRewardName + '%' }
	}
	if(data.userName){
			where.userName = { $like: '%' + data.userName + '%' }
		
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.CodeRecord.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	console.log(datas)
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
}

module.exports = RewardController;
