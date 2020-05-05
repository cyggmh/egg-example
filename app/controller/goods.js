'use strict';

const Controller = require('egg').Controller;
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

class GoodsController extends Controller {
  //商品列表
  async goodsList() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	const where ={}
	if(data.goodsName){
		where.goodsName = { $like: '%' + data.goodsName + '%' }
	}
	if(data.goodsPayType){
		if(data.goodsPayType == '全部'){
			data.goodsPayType = ''
		}
		where.goodsPayType = { $like: '%' + data.goodsPayType + '%' }
	}
	if(data.goodsState){
		if(data.goodsState == '全部'){
			data.goodsState = ''
		}else if(data.goodsState == '启用'){
			data.goodsState = '1'
		}else if(data.goodsState == '未启用'){
			data.goodsState = '0'
		}
		where.goodsState = { $like: '%' + data.goodsState + '%' }
	}
	let offset = data.pageSize*(data.pageNo-1)
	console.log(offset)
	let datas =  await ctx.model.Goods.findAll({where:where,raw:true,limit:parseInt(data.pageSize),offset:parseInt(offset)})
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
  // 商品详情
  async goodsInfo() {
    const { ctx } = this;
	const data = ctx.request.body;
	let datas =  await ctx.model.Goods.findOne({where:{id:data.id},raw:true})
    ctx.body = {
      code: 200,
      data: datas,
      message: 'success',
    };
	return ctx
  }
  // 商品新增
  async goodsAdd() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	console.log(data)
	data.saleNumber = 0
	let datas =  await ctx.model.Goods.create(data)
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
  // 商品更新
  async goodsUpdate() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.Goods.update(data,{where:{id:data.id},raw:true})
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
  // 商品删除
  async goodsDel() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	  
  }
  // 商品库存修改
  async goodsNum() {
    const { ctx } = this;
	const data = ctx.request.body;
	console.log(data)
	let datas =  await ctx.model.Goods.update({goodsStock:data.num},{where:{id:data.id},raw:true})
	console.log(datas)
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
  }
}

module.exports = GoodsController;
