// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  // 检查用户是否存在数据库
  let user = await db.collection('user')
    .where({
      openId: wxContext.OPENID
    }).get().then(res => {
      return res.data
    })
  let hadPermit = false
  if (Object.keys(user).length != 0 && user[0].key != '') {
    user = user[0]
    hadPermit = true
  }

  return {
    openid: wxContext.OPENID,
    user: user,
    hadPermit: hadPermit
  }
}