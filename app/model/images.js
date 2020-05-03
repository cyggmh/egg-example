'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const Images = app.model.define('images', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        url: {
            type: STRING(255),
            allowNull: false,
            comment: '图片地址'
        },
        group: {
            type: STRING(32),
            allowNull: false,
            comment: '分组'
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
        comment: 'Images',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return Images;
};