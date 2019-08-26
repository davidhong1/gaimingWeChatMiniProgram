// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  // 检查用户是否存在数据库
  const user = await db.collection('user')
    .where({
      openId: wxContext.OPENID
    }).get().then(res => {
      return res.data
    })

  if (Object.keys(user).length == 0) {
    // 新建用户
    console.log('新建用户')
    await db.collection('user').add({
      data: {
        key: '',
        openId: wxContext.OPENID,
        username: ''
      }
    }).then(res => {
      console.log("新建用户成功, _id=", res._id)
    })
  }

  // 准备符号
  let fuHao = await db.collection('fuHao').get().then(res => {
    return res.data[0]
  })

  return {
    openid: wxContext.OPENID,
    fuHao: fuHao
  }
}