// pages/index2/index2.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    arrayjc: ['改名教程(必读)：', '①改名需自备改名卡，新开号可直接使用', '②进入游戏粘贴出现不相干符号，请重新生成', '③进入游戏粘贴提示重复，请重新生成', '④重复名、空白名每次生成都不一样', '⑤永久解锁空白名功能：请联系客服', '⑥好程序乐分享，听说分享的人都已经上荣耀王者了^.^'],
    ifName: false,
    arrayFuhao: [],
    inputKey: ''
  },
  // 点击空白按钮弹出输入框
  konbaibut: function() {
    var that = this
    console.log('生成空白名')
    if (app.globalData.hadPermit) {
      console.log('直接进来')
      console.log("有权限，直接复制空白名")
      that.getKongBaiMing()
    } else {
      wx.cloud.callFunction({
        name: "checkUser",
        complete: res => {
          console.log('请求云函数checkUser, res.result.hadPermit=', res.result.hadPermit)
          console.log(res.result)
          if (res.result.hadPermit) {
            app.globalData.hadPermit = true
            console.log("有权限，直接复制空白名")
            that.getKongBaiMing()
          } else {
            // 没有权限
            this.setData({
              ifName: true
            })
          }
        }
      })
    }
  },
  getKongBaiMing: function() {
    var cfm = app.globalData.cfm;
    var abcUnicode = ''
    for (var i = 0; i < 6; i++) {
      abcUnicode = abcUnicode + cfm[Math.floor(Math.random() * cfm.length)]
    }
    console.log(abcUnicode)
    wx.setClipboardData({
      data: abcUnicode,
      success: function(res) {
        wx.showToast({
          title: '内容已复制'
        })
      }
    })
  },
  matchKey: function() {
    const that = this
    console.log(this.data.inputKey)
    wx.cloud.callFunction({
      data: {
        key: that.data.inputKey
      },
      name: "matchKey",
      complete: res => {
        console.log(res.result)
        if (res.result.keyMatch) {
          //key匹配，设置权限
          that.data.hadPermit = true
          that.setData({
            ifName: false
          })
        } else {
          wx.showToast({
            icon: "none",
            title: '您输入的密钥有误',
          })
        }
      }
    })
  },
  setKey: function(e) {
    var val = e.detail.value
    this.setData({
      inputKey: val
    })
  },
  // 点击取消按钮缩回输入框
  cancel: function() {
    this.setData({
      ifName: false
    })
  },
  hotText: function(e) {
    console.log('点击', e.currentTarget.dataset.text)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function(t) {
        // wx.showModal({
        //   title: '昵称已复制',
        //   content: '请前往游戏内粘贴改名',
        //   showCancel: false
        // })
      }
    })
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
          arrayFuhao: app.globalData.arrayFuhao
        })
      },
      fail: err => {
        if (time < 10) {
          that.getFuHao(++time)
        } else {
          wx.showModal({
            title: '请检查你的网络',
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
    console.log('index2 onLoad')
    if (!app.globalData.login) {
      console.log('还没登录')
      this.getFuHao(1)
    } else {
      console.log('已经登录')
      this.setData({
        arrayFuhao: app.globalData.arrayFuhao
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('index2 onshow')
    var that = this
    var timeOut = setTimeout(function() {
      console.log("延迟调用")
      if (that.data.arrayFuhao.length == 0) {
        console.log('arrayFuhao.length == 0')
        that.setData({
          arrayFuhao: app.globalData.arrayFuhao
        })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

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
  onShareAppMessage: function() {

  }
})