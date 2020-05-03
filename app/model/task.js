'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Task = app.model.define('task', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        taskName: {
            type: STRING(255),
            allowNull: false,
            comment: '任务名称'
        },
        taskType: {
            type: STRING(32),
            allowNull: false,
            comment: '任务类型'//熔炉 先锋 智谋 日常
        },
        taskReward: {
            type: STRING(32),
            allowNull: false,
            comment: '任务奖励'//微光 光尘 经验值
        },
        taskAsk: {
            type: STRING(32),
            allowNull: false,
            comment: '奖励数值'
        },
        // balance:{
        //           type: DECIMAL(10,2),
        // 	defaultValue:0.00,
        //           comment: '余额'
        // },
        // frozenAmount:{
        //           type: DECIMAL(10,2),
        // 	defaultValue:0.00,
        //           comment: '冻结金额'
        // },
        taskDescribe: {
            type: STRING(255),
            allowNull: false,
            comment: '任务描述'
        },
        taskSpend: {
            type: NUMERIC(11),
            allowNull: false,
            comment: '任务花费'
        },
        taskStartTime: {
            type: STRING(32),
            allowNull: false,
            comment: '任务开始时间'
        },
        taskEndTime: {
            type: STRING(32),
            allowNull: false,
            comment: '任务结束时间'
        },
        createtime: {
            type: DATE,
            allowNull: true,
            comment: '创建时间',
        },
        updatetime: {
            type: DATE,
            allowNull: true,
            comment: '修改时间',
        },
    }, {
        indexes: [],
        createdAt: 'createtime',
        updatedAt: 'updatetime',
        timestamps: true,
        comment: 'Task',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Task;
};