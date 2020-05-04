'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const CodeRecord = app.model.define('codeRecord', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        userId: {
            type: STRING(32),
            allowNull: false,
            comment: '使用者id'
        },
        userName: {
            type: STRING(32),
            allowNull: false,
            comment: '使用者名称'
        },
        guildRewardId: {
            type: STRING(32),
            allowNull: false,
            comment: '公会奖励id'
        },
        guildRewardName: {
            type: STRING(32),
            allowNull: false,
            comment: '公会奖励名称'
        },
        guildRewardCode: {
            type: STRING(255),
            allowNull: false,
            comment: '兑换码'
        },
        codeId: {
            type: INTEGER(11),
            allowNull: false,
            comment: '兑换码ID'
        },
        useTime: {
            type: STRING(32),
            allowNull: false,
            comment: '使用时间'
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
        comment: 'CodeRecord',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return CodeRecord;
};