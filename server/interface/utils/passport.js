import passport from 'koa-passport'//做登录验证的中间件
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

//策略是passport最重要的概念，passport本身不能做认证，所有的认证方法都以策略
//模式封装为插件，需要某种认证时将其添加到package.json即可
passport.use(new LocalStrategy(async function(username, password, done){
    let where = {
        username 
    };
    let result = await UserModel.findOne(where)
    if(result != null){
        if(result.password === password){
            return done(null, result)
        }else{
            return done(null, false, '密码错误')
        }
    }else{
        return done(null, false, '用户不存在')
    }
}))

//json序列化
passport.serializeUser(function(user,done){
    done(null, user)
})
//反序列化
passport.deserializeUser(function(user, done){
    return done(null, user)
})
export default passport