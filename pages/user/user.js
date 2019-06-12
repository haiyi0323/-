
var util= require('../../utils/util')
const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    id:"",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    jioswe:false,
    scb:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 // 获取到用户信息
 var that = this
 util.selectid(that.data.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    console.log(this);
    
  wx.login({
    //获取code
    success: function (res) {
      var code = res.code; //返回code
      console.log(code);
      var appId = '	wx9bb994275cec283f';
      var secret = 'f55bc15bb26602d1112aae40124a53f9';
      wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          var openid = res.data.openid //返回openid

            console.log(res);
            
          // 验证数据库中有没有这个openid
          console.log('openid为' + openid);
          // 暂存openid

          
          that.setData({
              id:openid
          })
           var appInst =  getApp();
           var tou =  appInst.globalData.userInfo.avatarUrl
           util.selectid(openid,tou)
        }
      })
    }
  })




   // 验证授权

   wx.getSetting({
    success: function(res){
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success: function(res) {
            console.log(res.userInfo)
          }
        })
      }
    }
  })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
          // 获取收藏表信息
          var that = this
      var appInst =  getApp();
      var userid = appInst.globalData.info.openid
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/shoucang.php',
   
        header:{"content-type": "application/x-www-form-urlencoded"},
             data: {type:3,id:userid},
        method: 'POST',
        success: (result)=>{
            console.log(result);

           that.setData(
            { scb:result.data.data}
           )
         
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    

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


  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
},


  mingpian(){
    let that = this;
    console.log(this);
    
    wx.navigateTo({
      url: `/pages/others/mingpian/mingpian?id=`+that.data.id,
  })
    
},
bindGetUserInfo: function(e) {
  console.log(e.detail.userInfo.avatarUrl)
  this.setData({
    jioswe:true,
    canIUse:false
  })
  
}

})