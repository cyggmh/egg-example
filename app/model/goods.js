'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Goods = app.model.define('goods', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        goodsName: {
            type: STRING(255),
            allowNull: false,
            comment: '商品名称'
        },
        goodsPayType: {
            type: STRING(32),
            allowNull: false,
            comment: '支付类型'//熔炉 先锋 智谋 日常
        },
        goodsStock: {
            type: NUMERIC(11),
            allowNull: false,
            comment: '商品库存'//微光 光尘 经验值
        },
        goodsPrice: {
            type: NUMERIC(11),
            allowNull: false,
            comment: '商品价格'
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
        goodsImage: {
            type: STRING(255),
            allowNull: false,
            comment: '商品图片'
        },
        goodsSynopsis: {
            type: STRING(255),
            allowNull: false,
            comment: '商品简介'
        },
        goodsState: {
            type: STRING(32),
            allowNull: false,
            comment: '状态'
        },
        saleNumber: {
            type: NUMERIC(11),
            allowNull: false,
            comment: '销售数量'
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
        comment: 'Goods',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Goods;
};