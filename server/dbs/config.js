export default {
    dbs: 'mongodb://127.0.0.1:27017/student',
    redis: {
        get host() {
            return '127.0.0.1'
        },
        get port() {
            return 6379
        }
    },
    smtp: {
        get host() {
            return 'smtp.qq.com'//腾讯主机邮箱服务
        },
        get user() {
            return '1098262516@qq.com'
        },
        get pass() {
            return ''//授权码
        }
    },
    get code() {
        return ()=>{
            //随机生成2到6位验证码
            return Math.random().toString(16).slice(2,6).toUpperCase()
        }
    },
    get expire() {
        //设置验证码1分钟过期
        return () => {
            return new Date().getTime() + 60*60*1000
        }
    }
}