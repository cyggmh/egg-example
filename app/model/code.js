'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Code = app.model.define('code', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        exchangeCode: {
            type: STRING(255),
            allowNull: false,
            comment: '兑换码'
        },
        guildRewardId: {
            type: STRING(255),
            allowNull: false,
            comment: '公会奖励id'
        },
        guildRewardName: {
            type: STRING(255),
            allowNull: false,
            comment: '公会奖励名称'
        },
        state: {
            type: INTEGER(11),
        	defaultValue:0,
            comment: '状态'
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
        comment: 'Code',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Code;
};