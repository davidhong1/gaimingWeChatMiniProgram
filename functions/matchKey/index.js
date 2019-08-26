// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  console.log(event.key)
  const key = await db.collection('key')
    .where({
      keyName: event.key,
      time: _.gt(0)
    }).get().then(res => {
      return res.data
    })

  let keyMatch = false
  if (Object.keys(key).length != 0) {
    //key记录存在
    keyMatch = true

    //更新key-time
    await db.collection('key').where({
      keyName: event.key
    }).update({
      data: {
        time: 0
      }
    })

    //更新user-key
    await db.collection('user').where({
      openId: wxContext.OPENID
    }).update({
      data: {
        key: event.key
      }
    })

    //新建key
    const randomStr = '1234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ'
    let newKey = ''
    for (var i = 0; i < 8; i++) {
      newKey = newKey + randomStr[Math.floor(Math.random() * 62)]
    }
    await db.collection('key').add({
      data: {
        keyName: newKey,
        time: 1
      }
    }).then(res => {
      console.log('新建key成功')
    })
  }

  return {
    openid: wxContext.OPENID,
    keyMatch: keyMatch
  }

}