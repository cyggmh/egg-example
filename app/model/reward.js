'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Reward = app.model.define('reward', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        rewardName: {
            type: STRING(255),
            allowNull: false,
            comment: '奖励名称'
        },
        rewardContent: {
            type: STRING(255),
            allowNull: false,
            comment: '奖励内容'//熔炉 先锋 智谋 日常
        },
        rewardType: {
            type: STRING(32),
            allowNull: false,
            comment: '奖励类型'//微光 光尘 经验值
        },
        rewardNumber: {
            type: NUMERIC(11),
            allowNull: false,
            comment: '奖励数量'
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
        convertStartTime: {
            type: STRING(32),
            allowNull: false,
            comment: '兑换开始时间'
        },
        convertEndTime: {
            type: STRING(32),
            allowNull: false,
            comment: '兑换截止时间'
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
        comment: 'Reward',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Reward;
};