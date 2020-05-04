const moment = require('moment');
const HTTPCODE = require('../../config/http_code');
const crypto = require('crypto');
module.exports = {
    array2Obj(arr, key, value, isObj = 0) {
        let obj = {}
        arr.map(a => {
            if (!a[key]) {
                return
            }
            if (!isObj && a[value]) {
                obj[a[key]] = a[value]
            } else {
                obj[a[key]] = a
            }
        })
        return obj
    },
    array2ObjArray(arr, key) {
        let obj = {}
        arr.map(a => {
            if (!a[key]) {
                return
            }
            let tmp = []
            if (obj[a[key]]) {
                tmp = obj[a[key]]
            }
            tmp.push(a)
            obj[a[key]] = tmp
        })
        return obj
    },
    keysort(key, sortType) {
        return function (a, b) {
            return sortType ? ~~(a[key] < b[key]) : ~~(a[key] > b[key])
        }
    },
    compare(property) {
        return function (obj1, obj2) {
            let value1 = obj1[property];
            let value2 = obj2[property];
            return value2 - value1;     // 降序
        }
    },
    relativeTime(time) {
        return moment(new Date(time * 1000)).fromNow()
    },
    sortObject(obj) {
        return Object.keys(obj).sort().reduce((a, v) => {
            a[v] = obj[v];
            return a;
        }, {});
    },
    success(data) {
        this.ctx.body = {
            status: HTTPCODE.HSD_OK.status,
            data: data,
            message: HTTPCODE.HSD_OK.message,
        };
    },
    fail(message, data = {}) {
        this.ctx.throw(message, {data: data});
    },
    checkEmptyString(str, errorMsg) {
        if (!str) {
            this.ctx.throw(errorMsg);
        }
    },
    checkEmptyArray(arr, errorMsg) {
        if (typeof arr == 'object' && arr.length <= 0) {
            this.ctx.throw(errorMsg);
        }
    },
    checkEmptyObject(object, errorMsg) {
        if (object == null) {
            this.ctx.throw(errorMsg);
        }
    },
    randomNumber(length) {
        return Math.random().toString().slice(-length)
    },
    arrayRemoveElement(arr, val) {
        if (Array.isArray(arr)) {
            var index = arr.indexOf(val);
            if (index > -1) {
                arr.splice(index, 1);
            }
        } else {
            return false;
        }
    },
    /**
     *
     * @param {*} msgData
     * {
            PhoneNumbers: '17621499962',
            SignName: '',
            TemplateCode: 'SMS_135791488',
            TemplateParam: '{"code":"12345"}'
        }
     */
    async sendMsg(msgData) {
        const {ctx, app, config} = this
        console.log('in sendMsg...')
        const SMSClient = require('@alicloud/sms-sdk')
        //初始化sms_client
        const accessKeyId = config.accessKeyId;
        const secretAccessKey = config.secretAccessKey;

        let smsClient = new SMSClient({accessKeyId, secretAccessKey})
        return smsClient.sendSMS(msgData)
    },
    paddingZero(data, length) {
        let padding = "000000" + String(data);
        return padding.substring(padding.length - length, padding.length);
    },
    randomNumber(length) {
        return Math.random()
            .toString()
            .slice(-length);
    },
    generalVcode() {
        const svgCaptcha = require("svg-captcha");
        var captcha = svgCaptcha.createMathExpr({
            width: 100,
            height: 40, // height of captcha
            fontSize: 50, // captcha text size
            color: true,
            noise: 2
        });
        return captcha;
    },
    //生成从minNum到maxNum的随机数
    randomNum(minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    },
    randomString(randomFlag, min, max) {
        let str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;// 任意长度
        }
        for (let i = 0; i < range; i++) {
            pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    },
    async getCode(length) {
        const {ctx, app, config} = this
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let noceStr = '', maxPos = chars.length;
        while (length--) noceStr += chars[Math.random() * maxPos | 0];
        let exist = await ctx.model.ShareCode.findOne({
            where: {
                code: noceStr
            }
        })
        if (exist) {
            this.getCode(length)
        } else {
            return noceStr;
        }
    },
    sleep(time = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    },
    tmsSignParams(params) {
        const {config} = this;
        let param = this.sortObject(params);
        let app_secret = config.tmsConfig.app_secret;
        let stringA = "";
        console.log("type", params instanceof Array);
        console.log("数据", param);
        if (params instanceof Array) {
            for (let index in param) {
                let object = param[index];
                if (object) {
                    for (let item in object) {
                        let tempStr = "";
                        let childBean = object[item];
                        if (childBean instanceof Array) {
                            for (let child in childBean) {
                                tempStr += "." + item + "[" + child + "]=" + childBean[child] + "&";
                            }
                        } else {
                            tempStr = "[" + index + "]." + item + "=" + object[item] + "&";
                        }
                        stringA += tempStr;
                    }
                }
            }
        } else {
            for (let item in param) {
                let childBean = param[item];
                let tempStr = "";
                if (childBean instanceof Array) {
                    for (let child in childBean) {
                        tempStr += "." + item + "[" + child + "]=" + childBean[child] + "&";
                    }
                } else {
                    tempStr += "." + item + "=" + param[item] + "&";
                }
                stringA += tempStr;
            }
        }
        stringA = stringA.substring(0, stringA.length - 1);
        let sign = crypto.createHash('md5').update(stringA + app_secret).digest('hex').toLowerCase();
        return sign;
    },
    generateOrderNumber() {
        //生成订单号
        //时间
        let date = moment(Date.now()).format("YYYYMMDDHHmmssSSS");
        //1位时间戳
        let dateDetails = Date.now().toString();
        let dates = dateDetails.substring(dateDetails.length - 1, dateDetails.length);
        return date + dates;
    },
    generateUpGoodsNumber() {
        //生成取货码
        //1位时间戳
        let dateDetails = Date.now().toString();
        let dates = dateDetails.substring(dateDetails.length - 6, dateDetails.length);
        return dates;
    },
    getTimeToAfter(number) {
        let after = number * 60 * 1000;
        return moment(new Date().getTime() + after).format("YYYY-MM-DD HH:mm:ss");
    },
    getTimeStrToDate(time) {
        if (time) {
            return new Date(moment(time).format('YYYY-MM-DD HH:mm:ss'));
        } else {
            return new Date();
        }
    },
    getTimeToBefore(time, second) {
        let data = this.getTimeStrToDate(time);
        return new Date(data.getTime() - (second * 1000));
    },
    isTimeOut() {
        //判断当前时间是不是超出截单时间 暂时是晚上11点
        let timeOut = moment().format('YYYY-MM-DD') + '23:00:00';
        let timeOutDate = new Date(timeOut).getTime();
        let currentDate = new Date().getTime();
        return currentDate > timeOutDate;
    },
    uuidGenerator() {
        let originStr = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            originChar = '0123456789abcdef',
            len = originChar.length;
        return originStr.replace(/x/g, function (match) {
            return originChar.charAt(Math.floor(Math.random() * len))
        })
    },
    keysort(key, sortType) {
        return function (a, b) {
            return sortType ? ~~(a[key] < b[key]) : ~~(a[key] > b[key])
        }
    },
    regionTypeJson(type) {
        let regions = [];
        this.app.regions.forEach(element => {
            if (element.grade == type) {
                regions.push({
                    parent_id: element.parent_id,
                    id: element.id,
                    name: element.name
                });
            }
        });
        return JSON.stringify(regions);
    },
    calcDistance(lat1, lng1, lat2, lng2) {
        let radLat1 = lat1 * Math.PI / 180.0;
        let radLat2 = lat2 * Math.PI / 180.0;
        let a = radLat1 - radLat2;
        let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;
        s = Math.round(s * 10000) / 10000;
        return s
    },
    encryptionPassword(pwd) {
        //加密password
        return crypto.createHash('md5').update(pwd).digest('hex');
    }

};
