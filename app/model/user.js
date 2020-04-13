'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        is_enabled: {
            type: STRING(32),
            defaultValue: 'yes',
            comment: '是否启用'
        },
        mobile: {
            type: STRING(32),
            allowNull: true,
            comment: '手机'
        },
        user_name: {
            type: STRING(255),
            allowNull: true,
            comment: '用户名'
        },
        name: {
            type: STRING(255),
            allowNull: true,
            comment: '名称'
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
        member_rank_id: {
            type: NUMERIC(11),
            defaultValue: 1,
            comment: '会员等级'
        },
        avatar: {
            type: STRING(255),
            defaultValue: '',
            comment: '会员头像'
        },
        weixin_openId: {
            type: STRING(64),
            defaultValue: '',
            comment: '微信openid'
        },
        buy_store_id: {
            type: NUMERIC(11),
            defaultValue: null,
            comment: '上次消费的门店ID'
        },
        amount: {
            type: DECIMAL(10, 2),
            defaultValue: 0.00,
            comment: '消费金额'
        },
        gender: {
            type: ENUM('male', 'female'),
            defaultValue: 'male',
            comment: '性别'
        },
        point: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '积分',
        },
        is_new: {
            type: STRING(32),
            defaultValue: '0',
            comment: '是否为新会员'
        },
        promotion_code: {
            type: STRING(32),
            defaultValue: '',
            comment: '地推码'
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
        indexes: [
            {
                name: 'user_id_ind',
                method: 'BTREE',
                fields: ['id']
            },
        ],
        createdAt: 'createtime',
        updatedAt: 'updatetime',
        timestamps: true,
        comment: 'User',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return User;
};