'use strict';

const Controller = require('egg').Controller;


class ImagesController extends Controller {
  //图片列表
  async imagesList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where ={}
	if(data.group){
		if(data.group == ''){
			where.group = { $like: '%' + data.group + '%' }
		}else{
			where.group = parseInt(data.group)
		}
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.Images.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
	// let userNum = await ctx.model.User.findAll({
	// 		attributes: [['count(*)', 'count'], 'id'],
	// 	    group: 'id',
	// 	    order: [['count', 'desc']],
	// 	    raw: true
	// })
	console.log(datas,'图片')
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

module.exports = ImagesController;
