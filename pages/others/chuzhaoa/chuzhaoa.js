// pages/others/chuzhaoa/chuzhaoa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      shuju:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let jios = options.id
    let that = this
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/chuzhao.php',
      header:{"content-type": "application/x-www-form-urlencoded"},
      data: {
          type:3,
          where:jios
      },
 
      method: 'POST',
      success: (result)=>{
        console.log(result);
          that.setData({
            shuju:result.data.data[0]
          })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
      console.log(options.id);
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})