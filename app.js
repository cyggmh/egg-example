'use strict';
// const moment = require('moment');
module.exports = app => {
    // const ctx = app.createAnonymousContext();
    app.beforeStart(async () => {
        // app.regions = await ctx.model.Area.findAll({
        //     where: {},
        //     order: [['order', 'ASC']],
        //     raw: true,
        //     attributes: ['id', 'grade', 'name', 'parent_id']
        // });
        // if (app.config.env === 'local') {
            // await app.model.User.sync({ force: true }); // 单个表
            // await app.model.Images.sync({ force: true }); // 单个表
            // await app.model.Guild.sync({ force: true }); // 单个表
            // await app.model.Task.sync({ force: true }); // 单个表
            // await app.model.TaskRecord.sync({ force: true }); // 单个表
            // await app.model.Goods.sync({ force: true }); // 单个表
            // await app.model.Reward.sync({ force: true }); // 单个表
            // await app.model.Code.sync({ force: true }); // 单个表
            // await app.model.CodeRecord.sync({ force: true }); // 单个表
            // await app.model.Position.sync({ force: true }); // 单个表
            // await app.model.Prop.sync({ force: true }); // 单个表
        // }

//             }
// 
//         });
    });
    // app.verifyData = function (rule, data) {
    //     if (rule) {
    //         var errors = app.validator.validate(rule, data);
    //         if (errors) {
    //             let errorMsg = ''
    //             Object.keys(errors).map(e => {
    //                 errorMsg += errors[e]['field'] + ' ' + errors[e]['message'] + '; '
    //             })
    //             if (errorMsg) {
    //                 ctx.throw(HTTPCODE.BADREQUEST.code, errorMsg, {});
    //             }
    //         }
    //     }
    // }
};
