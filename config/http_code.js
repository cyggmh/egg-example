'use strict';
module.exports = {
    OK: {
        message: 'OK',
        code: 200,
    },
    HSD_OK: {
        status: 'OK',
        message: "成功",
        code: 200,
    },
    HSD_FAIL: {
        status: 'FAILURE',
        message: "失败",
        code: 400,
    },
    BADREQUEST: {
        message: 'BAD REQUEST',
        code: 400,
    },
    UNAUTHORIZED: {
        status: 'FORBIDDEN',
        message: '未登录',
        code: 403,
    },
    NOTFOUND: {
        message: 'NOT FOUND',
        code: 404,
    },
    GATEWAYTIMEOUT: {
        message: 504,
        code: 504,
    },
    FORBIDDEN: {
        message: 'FORBIDDEN',
        code: 403
    },


};
