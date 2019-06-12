// pages/yue/yue.js

var QQMapWX = require('../../assit/api/qqmap-wx-jssdk')
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */

  data: {
    latitude:"",
    longitude:"",
    local:"",
    trues:true,
    falses:false,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 // 实例化API核心类
 qqmapsdk = new QQMapWX({
  key: '3ESBZ-WW3KI-5TKGV-5N7SZ-6DHBH-IWFHE'
});

// 初始获取自己位置
const _this = this;
wx.getLocation({
  type: 'gcj02',
  success: function (res) {

    console.log(res);
    
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: res.latitude,
        longitude: res.longitude
      },
      coord_type:3,
      success: function (addressRes) { 
        
        //成功后的回调
        var addressRes = addressRes.result;
        _this.setData({
          local:addressRes.location
        })
         },
      fail: function (error) {
        console.error(error);
      },
      complete: function (addressRes) {
   
        
      }
    })
    _this.setData({
      latitude:res.latitude,
      longitude:res.longitude
    })

  }
})


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // 将位置移动到中心
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var mapContext = wx.createMapContext('myMap', this);
    mapContext.moveToLocation()

    var that = this
    var appInst =  getApp();
    var userids = appInst.globalData.info.openid

      
    setTimeout(() => {
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/weizhi.php',
        data: {
          type:0,    
          userid:userids
        },
        header:{"content-type": "application/x-www-form-urlencoded"},
        method: 'POST',
        success: (result)=>{
            console.log(result);
            // 判断是否第一次定位
            if (result.data.data == 0) {
              console.log("第一次用");
              // 如果等于0了就添加进数据库
                wx.request({
                  url: 'https://haveideal.club/xiaochengx/other/weizhi.php',
                  data: {
                    type:1,
                    weidu:that.data.latitude,
                    jindu:that.data.longitude,
                    userid:userids
                  },
                  header:{"content-type": "application/x-www-form-urlencoded"},
                  method: 'POST',
                  success: (result)=>{
                    console.log(result);
                  },
                  fail: ()=>{},
                  complete: ()=>{}
                });
            }else {
              // 不为0修改数据库的参数
              console.log("老手了");
              wx.request({
                url: 'https://haveideal.club/xiaochengx/other/weizhi.php',
                data: {
                  type:2,
                  weidu:that.data.latitude,
                  jindu:that.data.longitude,
                  userid:userids  
                },
                header:{"content-type": "application/x-www-form-urlencoded"},
                method: 'POST',
                success: (result)=>{
                  console.log(result);
                },
                fail: ()=>{},
                complete: ()=>{}
              });
            }
        },
        fail: ()=>{},
        complete: ()=>{}
      });


    }, 3000);

    
   // 调用接口
//    qqmapsdk.search({
//     keyword: '酒店',
//     success: function (res) {
//         console.log(res);
//     },
//     fail: function (res) {
//         console.log(res);
//     },
// complete: function (res) {
//     console.log(res);
// }
// });
  // 渲染完成获取一下该用户的位置和个人信息发送到后台判断是否第一次

  // 如果第一次添加位置信息如果不是第一次 更改位置信息
  // 后台查找附近范围内的用户，渲染到market 出现附近的人





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
  
  locnow(){
    var mapContext = wx.createMapContext('myMap', this);
    mapContext.moveToLocation()
  }
})