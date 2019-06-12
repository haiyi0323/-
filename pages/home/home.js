// pages/home/home.js
import util from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://i0.hdslb.com/bfs/archive/b0ffd8b17398ca2df4bdbf81857efb3502becd66.png@480w_300h.webp',
      'https://i0.hdslb.com/bfs/archive/cc05934d5e1cadd2763bd3afb301e700ef7ce9f0.jpg@480w_300h.webp',
      'https://i0.hdslb.com/bfs/archive/602823e07246cc4a4981db82944d3c3d97fd283f.jpg@480w_300h.webp'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    color:"white",
    hovercolor:"#fa452d",
    video:"",
    title:"jjjjj",
    fenlei:"",
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     


    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/video.php',
 
      header:{"content-type": "application/x-www-form-urlencoded"},
           data: {type:1},
      method: 'POST',
      success: (result)=>{
          console.log(result);
          console.log(this)
     
         this.setData(
          { video:result.data.data}
         )
       
      },
      fail: ()=>{},
      complete: ()=>{}
    });

// 获取分类信息
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/fenlei.php',
 
      header:{"content-type": "application/x-www-form-urlencoded"},
           data: {type:1},
      method: 'POST',
      success: (result)=>{
          console.log(result);
          console.log(this)
     
         this.setData(
          { fenlei:result.data.data}
         )
       
      },
      fail: ()=>{},
      complete: ()=>{}
    });

     // 获取到用户信息
 var that = this
 util.selectid(that.data.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 发送请求 ，返回数据
    console.log(this.data.video);
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

  /**
   * 其他函数
   * 
   * 
   */
 
  xiangqing(e){
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
        url: `/pages/router/router?id=${e.currentTarget.dataset.id}`,
    })
      
  },
  guanliye(){
    wx.navigateTo({
      url: `/pages/admin/index/index`,
  })
  }


})