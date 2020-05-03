'use strict';
module.exports = app => {
    const { STRING, JSON, INTEGER, DATE, NUMERIC, DECIMAL, ENUM, BOOLEAN, TEXT } = app.Sequelize;
    const TaskRecord = app.model.define('taskRecord', {
        id: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        memberId: {
            type: INTEGER(11),
            allowNull: false,
            comment: '成员ID'
        },
        taskId: {
            type: INTEGER(11),
            allowNull: false,
            comment: '任务ID'
        },
        state: {
            type: INTEGER(11),
            allowNull: false,
            comment: '状态'//0未完成 1完成
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
        comment: 'TaskRecord',
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return TaskRecord;
};