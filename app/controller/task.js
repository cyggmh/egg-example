'use strict';

const Controller = require('egg').Controller;


class GuildController extends Controller {
  //任务信息列表
  async taskList() {
    const { ctx } = this;
	const data = ctx.request.body;
	// console.log(data)
	const where = {}
	if(data.taskName){
		where.taskName = { $like: '%' + data.taskName + '%' }
	}
	if(data.taskType){
		if(data.taskType == '全部'){
			data.taskType = ''
		}
		where.taskType = { $like: '%' + data.taskType + '%' }
	}
	if(data.taskReward){
		if(data.taskReward == '全部'){
			where.taskReward = ''
		}
		where.taskReward = { $like: '%' + data.taskReward + '%' }
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.Task.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	console.log(datas,'任务')
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
  // 任务信息详情
  async taskInfo() {
    const { ctx } = this;
	const data = ctx.request.body;
	// console.log(data)
	let datas =  await ctx.model.Task.findOne({where:{id:data.id},raw:true})
	// let user = await ctx.model.User.findOne({where:{id:parseInt(datas.guildCreateID)},raw:true})
	// let userNum = await ctx.model.User.findAll({
	// 		attributes: [['count(*)', 'count'], 'id'],
	// 	    group: 'id',
	// 	    order: [['count', 'desc']],
	// 	    raw: true
	// })
	// const res = await ctx.model.User.findAndCountAll();
	// console.log(datas,'公会')
	// console.log(res.count,'数量')
	// datas.userNum = res.count
	// console.log(user,'会长')
	// let data = {
	// 	guild:datas,
	// 	user:user
	// }
    ctx.body = {
      code: 200,
      data: datas,
      message: 'success',
    };
	return ctx
  }
  // 任务信息新增
  async taskAdd() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	// delete data.id
	// data.taskSpend = parseInt(data.taskSpend)
	console.log(data)
	let datas =  await ctx.model.Task.create(data)
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
  // 任务信息更新
  async taskUpdate() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.Task.update(data,{where:{id:data.id},raw:true})
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
  // 任务信息删除
  async taskDel() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	  
  }
  // 任务记录列表
  async taskRecordList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where = {}
	const where1 = {}
	const where2 = {}
	const state = {}
	if(data.taskName){
		where1.taskName = { $like: '%' + data.taskName + '%' }
	}
	if(data.userName){
		where2.name = { $like: '%' + data.userName + '%' }
	}
	if(data.state){
		if(data.state == ''){
			where.state = { $like: '%' + data.state + '%' }
		}else{
			where.state = parseInt(data.state)
		}
	}
	let offset = data.pageSize*(data.pageNo-1)
	// console.log(offset)
	// let datas =  await ctx.model.Task.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	let datas =  await ctx.model.TaskRecord.findAll({
		where:where,
		raw: true,
		limit:parseInt(data.pageSize),
		offset:parseInt(offset)
	})
	// console.log(datas,'datas')
	let task = await ctx.model.Task.findAll({where:where1,raw:true})
	// console.log(task,'task')
	let user = await ctx.model.User.findAll({where:where2,raw:true})
	// console.log(user,'user')
	let dataArr = []
	datas.map(item=>{
		task.map(t=>{
			if(item.taskId == t.id){
				item.taskName = t.taskName
			}
		})
		user.map(u=>{
			if(item.memberId == u.id){
				item.userName = u.name
			}
		})
	})
	// console.log(datas)
	datas.map(item =>{
		if((item.userName!=undefined ||item.userName!=null )&&(item.taskName!=undefined ||item.taskName!=null)){
			dataArr.push(item)
		}
	})
	// console.log(dataArr,'dataArr')
    ctx.body = {
      code: 200,
      data: {
		  records:dataArr,
		  total:dataArr.lenght,
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

module.exports = GuildController;
