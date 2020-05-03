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
        name: {
            type: STRING(255),
            allowNull: false,
            comment: '名称'
        },
        account: {
            type: STRING(32),
            allowNull: false,
            comment: '账号'
        },
        password: {
            type: STRING(32),
            allowNull: false,
            comment: '密码'
        },
        headImage: {
            type: STRING(255),
            allowNull: true,
            comment: '头像'
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
        seasonLevels: {
            type: NUMERIC(11),
            defaultValue: 1,
            comment: '赛季等级'
        },
        hardLight: {
            type: NUMERIC(11),
            defaultValue: 1,
            comment: '硬光等'
        },
        artifact: {
            type: NUMERIC(11),
            defaultValue: 1,
            comment: '赛季神器等级'
        },
        glimmering: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '微光'
        },
        coin: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '银币'
        },
        // dust: {
        //     type: ENUM('male', 'female'),
        //     defaultValue: 'male',
        //     comment: '光尘'
        // },
        dust: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '光尘'
        },
        title: {
            type: STRING(32),
            defaultValue: '',
            comment: '称号',
        },
        heroic: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '英勇分数'
        },
        glory: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '荣耀分数'
        },
        Evil: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '恶行分数'
        },
        legendFragments: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '传说碎片'
        },
        synopsis: {
            type: STRING(255),
            defaultValue: '',
            comment: '个人简介'
        },
        position: {
            type: STRING(32),
            defaultValue: '',
            comment: '职位'
        },
        empirical: {
            type: NUMERIC(11),
            defaultValue: 0,
            comment: '经验值'
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