// pages/others/mingpian/mingpian.js
import ulit from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    starIndex4 : 4,
    id:"",
    imgurl:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInst =  getApp();
    let arr = [] 
      arr.push(appInst.globalData.info.img1)
      arr.push(appInst.globalData.info.img2)
      arr.push(appInst.globalData.info.img3)
      arr.push(appInst.globalData.info.img4)
      arr.push(appInst.globalData.info.img5)
      arr.push(appInst.globalData.info.img6)
      console.log(arr);
      this.setData({
        id:options.id,
        imgurl:arr
      })

  },
  previewImg:function(e){
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgurl;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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

  bianji(){
    let that = this
    wx.navigateTo({
      url: `/pages/others/info/info?id=` + that.data.id,
  })
  }
})