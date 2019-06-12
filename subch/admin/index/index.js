// pages/admin/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  
  chuzhao(){
    wx.navigateTo({
      url: `/pages/admin/chuzhao/chuzhao`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  gonggao(){
    wx.navigateTo({
      url: `/pages/admin/gonggao/gonggao`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
  ,
  zhoubian(){
    wx.navigateTo({
      url: `/pages/admin/zhoubian/zhobian`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  hezuo(){
    wx.navigateTo({
      url: `/pages/admin/hezuo/hezuo`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  kedaibiao(){
    wx.navigateTo({
      url: `/pages/admin/kedaibiao/kedaibiao`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  fenlei(){
    wx.navigateTo({
      url: `/pages/admin/fenlei/fenlei`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  lunbo(){
    wx.navigateTo({
      url: `/pages/admin/lunbo/lunbo`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  yonghu(){
    wx.navigateTo({
      url: `/pages/admin/yonghu/yonghu`,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }


  
})