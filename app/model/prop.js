'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Prop = app.model.define('prop', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        userId: {
            type: INTEGER(11),
            allowNull: false,
            comment: '用户Id'
        },
        name: {
            type: STRING(32),
            allowNull: false,
            comment: '物品名称'//熔炉 先锋 智谋 日常
        },
        number: {
            type: INTEGER(11),
            allowNull: false,
            comment: '物品数量'//熔炉 先锋 智谋 日常
        },
        synopsis: {
            type: STRING(255),
            allowNull: false,
            comment: '简介'//熔炉 先锋 智谋 日常
        },
        goodsImage: {
            type: STRING(255),
            allowNull: false,
            comment: '物品图片'//熔炉 先锋 智谋 日常
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
        comment: 'Prop',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Prop;
};