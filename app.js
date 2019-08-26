//app.js
App({
  onLaunch: function() {
    //云开发初始化
    wx.cloud.init({
      env: 'wz-prd1-zxt6p',
      traceUser: true
    })
  },
  globalData: {
    login: false,
    hadPermit: false,
    cfm: [],
    arrayFuhao: [],
    suiji: []
  }
})