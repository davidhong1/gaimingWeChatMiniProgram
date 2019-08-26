//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    input1: '',
    shuruNu: '',
    suiji: [],
    cfm: [],
    share: false
  },
  // suiji点击事件
  catch1tap: function() {
    var n = Math.round(Math.random() * (this.data.suiji.length - 1))
    this.setData({
      input1: this.data.suiji[n]
    })
  },
  //长按事件，实现复制
  long: function() {
    wx.setClipboardData({
      data: this.data.input1,
      success: function(res) {
        wx.showToast({
          title: '内容已复制'
        })
      }
    })
  },
  chongfuInput: function(e) {
    this.setData({
      shuruNu: e.detail.value
    })
  },
  // cfm点击事件
  catch2tap: function(t) {
    var shuruNUdata = this.data.shuruNu
    var cfm = this.data.cfm
    if (shuruNUdata == '') {
      wx.showModal({
        content: '请输入昵称',
        showCancel: false
      })
    } else if (shuruNUdata.length > 5) {
      //输入名字大于等于6，不合法
      wx.showModal({
        content: '输入昵称最长长度不能大于5',
        showCancel: false
      })
    } else {
      var cf = ''
      if (shuruNUdata.length == 1) {
        for (var u = 0; u < 5; u++) {
          cf = cfm[Math.round(Math.random() * (cfm.length - 1))] + cf
        }
        console.log(cf)
      } else if (shuruNUdata.length == 2) {
        for (var w = 0; w < 4; w++) {
          cf = cfm[Math.round(Math.random() * (cfm.length - 1))] + cf
        }
        console.log(cf)
      } else if (shuruNUdata.length == 3) {
        for (var x = 0; x < 3; x++) {
          cf = cfm[Math.round(Math.random() * (cfm.length - 1))] + cf
        }
        console.log(cf)
      } else if (shuruNUdata.length == 4) {
        for (var y = 0; y < 2; y++) {
          cf = cfm[Math.round(Math.random() * (cfm.length - 1))] + cf
        }
        console.log(cf)
      } else {
        cf = cfm[Math.round(Math.random() * (cfm.length - 1))]
        console.log(cf)
      }

      // var cf = Math.round(Math.random() * (cfm.length - 1))
      //存最终生成的名字
      var chongFuMingInput = ""
      console.log(chongFuMingInput)
      //临时数据，存储shuruNu分割后的字符数组
      var tempInput = this.data.shuruNu.split("")
      //随机插入点
      var randomInsert = Math.round(Math.random() * (tempInput.length - 1))
      for (var i = 0; i < tempInput.length; i++) {
        if (randomInsert == i) {
          //随机插入点等于当前数组下标，添加随机插入点
          chongFuMingInput = chongFuMingInput + tempInput[i] + cf
        } else {
          chongFuMingInput = chongFuMingInput + tempInput[i]
        }
      }
      console.log(chongFuMingInput)

      wx.setClipboardData({
        data: chongFuMingInput,
        success: function(t) {
          wx.showModal({
            title: '重复名已复制',
            content: '请前往游戏内粘贴改名',
            showCancel: false
          })
        }
      })
    }
  },
  //获取fuHao
  getFuHao: function(time) {
    console.log('调用getFuhao函数, time=', time)
    var that = this;
    wx.cloud.callFunction({
      name: "newUser",
      success: res => {
        app.globalData.login = true
        app.globalData.arrayFuhao = res.result.fuHao.arrayFuhao;
        app.globalData.suiji = res.result.fuHao.suiji;
        app.globalData.cfm = res.result.fuHao.cfm;
        that.setData({
          arrayFuhao: app.globalData.arrayFuhao,
          suiji: app.globalData.suiji,
          cfm: app.globalData.cfm
        })
      },
      fail: err => {
        if (time < 10) {
          that.getFuHao(++time)
        } else {
          wx.showModal({
            title: '您的网络出了点问题',
            content: '请检查您的网络',
            showCancel: false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('index1 onLoad')
    if (!app.globalData.login) {
      console.log('还没登录')
      this.getFuHao(1)
    } else {
      console.log('已经登录')
      this.setData({
        suiji: app.globalData.suiji,
        cfm: app.globalData.cfm
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('index1 onshow')
    var that = this
    try {
      that.setData({
        share: wx.getStorageSync('share')
      })
    } catch (e) {
      console.log('出错了')
    }
    var timeOut = setTimeout(function() {
      console.log("延迟调用")
      if (that.data.suiji.length == 0) {
        console.log('suiji.length == 0')
        that.setData({
          suiji: app.globalData.suiji,
          cfm: app.globalData.cfm
        })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(ops) {
    console.log('转发')
    try {
      wx.setStorageSync('share', true)
    } catch (e) {
      console.log('出错了')
    }
  }
})