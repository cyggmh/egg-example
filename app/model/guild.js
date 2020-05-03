'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Guild = app.model.define('guild', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        guildName: {
            type: STRING(255),
            allowNull: false,
            comment: '公会名称'
        },
        guildLevels: {
            type: NUMERIC(11),
            defaultValue: 1,
            comment: '公会等级'
        },
        guildEpx: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '公会经验'
        },
        guildMemberMax: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '公会最大人数'
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
        guildCreateID: {
            type: NUMERIC(11),
            allowNull: true,
            comment: '公会创建者ID'
        },
        guildFunds: {
            type: NUMERIC(11),
            defaultValue: 10000,
            comment: '公会资金'
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
        comment: 'Guild',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Guild;
};