// pages/others/chuzhao/chuzhao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      arr:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求出招表数据
    let that = this
wx.request({
  url: 'https://haveideal.club/xiaochengx/other/chuzhao.php',
      data: {
          type:2
      },
      header:{"content-type": "application/x-www-form-urlencoded"},
      method: 'POST',
      
      success: (result)=>{
          console.log(result.data.data);
        that.setData({
          arr:result.data.data
        })
          
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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

  },
  chuzhaoa(e){

        let zhi = e.currentTarget.dataset.id
        wx.navigateTo({
          url: `/pages/others/chuzhaoa/chuzhaoa?id=`+zhi,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      console.log(e.currentTarget.dataset.id);
      
  }
})