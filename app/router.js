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
  router.post('/taskInfo', controller.task.taskInfo);//任务信息列表
  router.post('/taskAdd', controller.task.taskAdd);//任务信息列表
  router.post('/taskUpdate', controller.task.taskUpdate);//任务信息列表
  router.post('/taskDel', controller.task.taskDel);//任务信息列表
  router.post('/taskRecordList', controller.task.taskRecordList);//任务记录列表
  //reward 任务奖励
  router.post('/rewardList', controller.reward.rewardList);//任务信息列表
  router.post('/rewardInfo', controller.reward.rewardInfo);//任务信息列表
  router.post('/rewardAdd', controller.reward.rewardAdd);//任务信息列表
  router.post('/rewardUpdate', controller.reward.rewardUpdate);//任务信息列表
  router.post('/rewardDel', controller.reward.rewardDel);//任务信息列表
  //图片
  router.post('/imagesList', controller.images.imagesList);//图片列表
  //公会奖励
  router.post('/rewardList', controller.reward.rewardList);//公会奖励列表
  router.post('/rewardCode', controller.reward.rewardCode);//公会奖励兑换码
  router.post('/rewardCodeList', controller.reward.rewardCodeList);//公会奖励兑换码列表
  router.post('/rewardUseCodeList', controller.reward.rewardUseCodeList);//公会奖励兑换码使用记录列表
};
