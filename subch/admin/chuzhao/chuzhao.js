// pages/admin/chuzhao/chuzhao.js
import unilt from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:"",
      content:"",
      gif:"",
      starIndex2 : 0,
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
  onChange2(e){
    const index = e.detail.index;
    this.setData({
        'starIndex2' : index
    })
},
    // 双向绑定
    title(e){
        let jifds = e
        let that = this;
        unilt.inputs(that,jifds,"title")
    },
    content(e){
        let jifds = e
        let that = this;
        unilt.inputs(that,jifds,"content")
    },
//    渲染图片
gif(){
    let that = this
    unilt.xuanran(that,"gif")
},


// 上传
handleClick(){
        let that = this;
        wx.request({
        url: 'https://haveideal.club/xiaochengx/other/chuzhao.php',
        header:{"content-type": "application/x-www-form-urlencoded"},
        data: {
            type :1,
            title: that.data.title,
            content:that.data.content,
            nandu:that.data.starIndex2
        },
        method: 'POST',
        success: (result)=>{
            let lldf = result.data.data.insertId
            let gif = that.data.gif[0]
            unilt.uploada("https://haveideal.club/xiaochengx/other/chuzhao.php",lldf,gif)
   
            
        },
        fail: ()=>{},
        complete: ()=>{}
    });
    
}
})