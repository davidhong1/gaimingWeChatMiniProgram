# 王者改名小程序

## 下载项目, 导入项目，指定项目名、路径、AppID

![导入项目](https://github.com/HYUANT/gaimingWeChatMiniProgram/blob/master/docs/import_project.png) 



 ## [小程序云开发后台](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

### 初始化表

在云开发控制台中，

- 初始化key表(存储密钥)

```js
db.collection('key')
  .add({
    data: [
      {
        keyName: 'apple',
        time: 1
      }
    ]
  })
```

- 初始化fuHao表(存储特殊字符和空白名等)

```js
db.collection('fuHao')
  .add({
    data: {
      arrayFuhao: ['枫叶⸙', '学妹²⁰¹⁹', 'ζ❀梦ى', '红้็颜ۣۖ', '╰☆秋风oO', '南辞ꦿ゜এ', '℡渣男ヾ', '瞅啥✪', '✿大叔ღ', '依赖ღ҉', 'ღ叶❧秋', 'এ᭄燕ོꦿృ༊', '六道仙ོ人ꦿ', '︻安▅▆▇◤', '梦ꦿ`', '☃', '♞', '♡', '♤', '☾', '☽', '☼', '✭', '✬', '✫', '✰', '✧', '✦', '⋆', '❀', '❋', '❃', '❁', '✿', '✾', '✽', '♜', '♛', '♚', '♕', '♔', 'ʚɞ ', 'ʚΐɞ ', '▒', '̈́͒', '₯', '҉', 'ღ ', 'ฬ ', 'ะ ', '๏', '๛', '๗', '๓', '๑', 'ჲ ', 'ჯ ', 'ტ ', 'ლ ', 'დ ', ' ر ', 'ε ', 'з ', '﹅', '﹆', '★', '㍊', '㍍', '㍑', '㌫', '㌍', '㌫', '㌶', '❤', '♥', '上排数字： º¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼ ', '下排数字：₀₁₂₃₄₅₆₇₈₉₊₋₌ ', '上排： ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ', '上排： ᴬ ᴮ ᒼ ᴰ ᴱ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴼ̴ ᴿ ˢ ᵀ ᵁ ᵂ ˣ ᵞ ᙆ '],
      cfm: [],
      kongBaiName: [],
      suiji: ['༺爱༒情༻❦', '✿大白莎҉', '太白 ζั͡~', '奶我 ღ ҉҉҉҉҉҉҉҉҉҉', '✾͡安啦oೄ೨', '挽留 گق', '七爷ღ', '呆猪้๊้๊', 'Ꮙ·朝暮', '﹏﹌浪子', '〆乀追风〆乀', '╰☆秋水oO', 'ღ҉ 萌哭', '别̶闹̶', '≮错過≯', '﹏๓₯゛妖尾', 'ﻬق、ゞ勿忘', '木兰ړ₊', 'こ春郎こ', 'ৡ蔠嚸 ೄ೨', '演้็员ۣ', '༺思ゝ爷༻', 'ℳ_子龙丶℘', '阡陌ั͡✿', 'BooM☆*:.｡.', '❀＂怪叔 ღ', '✾͡千夏ೄ೨', '✿͡小雪怪', '❀﹏๓₯毒药', '๓҉ 北风寒', '萱萱✿ۣว', '❀ൢ柠萌ൢ❀', 'ᖬིཊ风ཊᖪྀ', '༺―花痴―༻', '橙̶妹̶م', '小̸师̸妹̸', '冬ོ雨ོ', '南辞ꦿ゜এ', 'এ᭄燕ོꦿృ༊', 'ღ龙儿᭄ꦿ࿐', '梦ꦿ` ', '六道仙ོ人ꦿ', '枫叶⸙', '¸₋ 尐〣 ҉', '红้็颜ۣۖ', 'IPhone8s☃☃', 'ℳÇ҉丶樱桃', '国服路人王℡', 'ζ❀汤圆圆ى', 'ೄ冷೨胤๓', ':*☆言溪☆*:', 'ζั͡✾情缘҉', 'گق  鹿十', '三้็年ۣۖ', '依赖ღ҉', '❢星星点灯❣', '兔子 ҉', '✿•ᴥ•✿', 'Ꮙ·思绪', '╰⋛默然⋚╯', '❦花璃༺', 'ღ҉ ୨花秀୧❀', '玩ۚ味ۣۖ', '〆灬小妖精ゝ', '༽༾M神༿༼', '҈Ͽ风流倜傥 ೃ', '戰メ六月✿', '*☻宇哥☻*', '贝塔✿', '買酔℡浅唱', '⊱終極喫貨⊰', '☂ღ҉ 17歲', '凉城  ةم', '隼龙سً', 'ღ゛5 殺 ❀', '༂芬༒奇༂℡', '、Mi❅小白ヅ', '你瞅啥✪', 'ご啻耀★龙涎ぃ', '♚陪她终老❦', '҉   苏沐', '༺ༀ清风ༀ༻', '❀ 临风', '触手寂风ღ', '.ت‿逸ツ', '₰ ゝ老酒﷼', '￡死神的メ镰刀ぃ', '꧁༺强༻꧂ღ', '❀҉风走了', '๛๓㎖°乱神', 'ζ͡✾帝❦岚', '₯ღ゛提笔⁶', '︻安▅▆▇◤', 'ζั͡✿鴻ى', '♚_乔巴.ღ', 'ゝ狂三ゞ', '❦酒༒客❦꧂', '╬魍魉็้๘', '༺棒༒锤༻', '༺☜千羽☞༻', 'ご狂刀☞先生', '瓶装水ღ҉', '༺冷江月༻', '♪以梦为马☂', '*☻奈何☻*', 'ず夜空下的流星ゞ', 'Ꮙ·大宝剑', '✿..魂淡°', 'ぴ懒癌晚期〆', '誓☪༺宝er༻', 'D̶i̶e̶', '༺梦境缠绕༻', '₯๑  达浪و', '✿森屿༻ℳ', '๘苏妲己໑', 'Ꮙ·朝暮', '웃 ღ 유', '夏目君がۣۖ', '肉肉  ړ₊']
    }
  })
```



### 云开发初始化

app.js

```js
App({
  onLaunch: function() {
    //云开发初始化
    wx.cloud.init({
      env: '你的云开发环境名',
      traceUser: true
    })
  },
})
```

### 云函数newUser

新建用户和获取初始化字符串

newUser.js

```js
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
```

### 云函数checkUser

获取用户空白名权限

checkUser.js

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  // 检查用户是否存在数据库, 获取用户空白名权限
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
```

### 云函数matchKey

匹配用户输入的密钥，修改用户空白名权限

matchKey.js

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 匹配key
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
```

### 已上线小程序

王者改名小工具

![王者改名小工具](https://github.com/HYUANT/gaimingWeChatMiniProgram/blob/master/docs/wzgm.jpg)


