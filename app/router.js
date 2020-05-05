'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //user 成员
  router.post('/userList', controller.user.userList);//用户列表
  router.post('/userInfo', controller.user.userInfo);//用户详情
  //guild 公会
  router.post('/guildInfo', controller.guild.guildInfo);//公会详情
  //task 任务
  router.post('/taskList', controller.task.taskList);//任务信息列表
  router.post('/taskInfo', controller.task.taskInfo);//任务信息详情
  router.post('/taskAdd', controller.task.taskAdd);//任务信息新增
  router.post('/taskUpdate', controller.task.taskUpdate);//任务信息更新
  router.post('/taskDel', controller.task.taskDel);//任务信息删除
  router.post('/taskRecordList', controller.task.taskRecordList);//任务记录列表
  //reward 任务奖励
  router.post('/rewardList', controller.reward.rewardList);//任务奖励列表
  router.post('/rewardInfo', controller.reward.rewardInfo);//任务奖励详情
  router.post('/rewardAdd', controller.reward.rewardAdd);//任务奖励新增
  router.post('/rewardUpdate', controller.reward.rewardUpdate);//任务奖励更新
  router.post('/rewardDel', controller.reward.rewardDel);//任务奖励删除
  //goods 商品
  router.post('/goodsList', controller.goods.goodsList);//商品列表
  router.post('/goodsInfo', controller.goods.goodsInfo);//商品详情
  router.post('/goodsAdd', controller.goods.goodsAdd);//商品新增
  router.post('/goodsUpdate', controller.goods.goodsUpdate);//商品更新
  router.post('/goodsDel', controller.goods.goodsDel);//商品删除
  router.post('/goodsNum', controller.goods.goodsNum);//商品库存修改
  //图片
  router.post('/imagesList', controller.images.imagesList);//图片列表
  router.post('/imagesGoods', controller.images.imagesGoods);//商品图片列表
  router.post('/imagesAvatar', controller.images.imagesAvatar);//头像图片列表
  //公会奖励
  router.post('/rewardList', controller.reward.rewardList);//公会奖励列表
  router.post('/rewardCode', controller.reward.rewardCode);//公会奖励兑换码
  router.post('/rewardCodeList', controller.reward.rewardCodeList);//公会奖励兑换码列表
  router.post('/rewardUseCodeList', controller.reward.rewardUseCodeList);//公会奖励兑换码使用记录列表
};
