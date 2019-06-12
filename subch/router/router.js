// pages/router/router.js
import uklie from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videourl:"",
    imageWidth:"",
    imageheight:"",
    shengyu:"",
    videoinfo:"",
    fengmian:"",
    name: '',
    pinglun:"",
    toux:"",
    zuozhen:"",
    like:false,
    shoucang:false,
    shoucangstate:-1,
    likestate:-1,
    zuopinid:"",
    plb:"",
    pltouimg:"",
    plxub:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          zuopinid:options.id
      })
    var that = this;
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/video.php',
      data: {type :2,id:options.id},
      header:{"content-type": "application/x-www-form-urlencoded"},
      method: 'POST',
      success: (result)=>{
            this.setData({
                videoinfo:result.data.data[0],
                videourl:result.data.data[0].videourl,
                fengmian:result.data.data[0].homeimage,
                    // 获取屏幕宽度
                imageWidth: wx.getSystemInfoSync().windowWidth,
                imageheight:wx.getSystemInfoSync().windowWidth * 0.5665,
              
            })


                // 查作者的信息
        wx.request({
            url: 'https://haveideal.club/xiaochengx/other/selectid.php',
            data: {type:1,id:result.data.data[0].user},
            header:{"content-type": "application/x-www-form-urlencoded"},
            method: 'POSt',
            success: (result)=>{
                console.log(result.data.data[0].touimg);
                that.setData({
                    toux:result.data.data[0].touimg,
                    zuozhen:result.data.data[0].name
                })
            },
            fail: ()=>{},
            complete: ()=>{}
          });


      },
      fail: ()=>{},
      complete: ()=>{
        let he = this.data.imageheight;
        this.setData({
          shengyu: wx.getSystemInfoSync().windowHeight  - he
      })
        
      }
    })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // 渲染完成获取对应的是否点赞收藏等信息
      var appInst =  getApp();
      var that = this
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/like.php',
      data: {
        type:2,
        typelike:1,
        zuopinid:that.data.zuopinid,
        userid:appInst.globalData.info.openid,
      },
      header:{"content-type": "application/x-www-form-urlencoded"},
      method: 'POST',
      success: (result)=>{
        console.log(result);
        if (result.data.data[0]) {
            // 查到了说明你点过了赞
            that.setData({
                like : true,
                likestate:1
            })
        }
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    // 看是否收藏过
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/shoucang.php',
      data: {
        type:2,
        typelike:1,
        zuopinid:that.data.zuopinid,
        userid:appInst.globalData.info.openid,
      },
      header:{"content-type": "application/x-www-form-urlencoded"},
      method: 'POST',
      success: (result)=>{
        console.log(result);
        if (result.data.data[0]) {
            // 查到了说明你点过了赞
            that.setData({
                shoucang : true,
                shoucangstate:1
            })
        }
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });


//  渲染后查出前十条评论数据

    var touimg = []
    wx.request({
      url: 'https://haveideal.club/xiaochengx/other/pinglun.php',
      data: {
          type:2,
          typepl:1,
          zuopinid:that.data.zuopinid,

      },
      header:{"content-type": "application/x-www-form-urlencoded"},
      method: 'POST',
      success: (result)=>{

         result.data.data.forEach(element => {

            wx.request({
              url: 'https://haveideal.club/xiaochengx/other/selectid.php',
              data: {
                type:5,
                userid:element.from_userid,
              },
              header:{"content-type": "application/x-www-form-urlencoded"},
              method: 'POST',
              success: (result)=>{
                touimg.push(result.data.data[0])
              },
              fail: ()=>{},
              complete: ()=>{


              
              
              }

            });

           
         
         });

       
        

          that.setData({
            plb : result.data.data,
            pltouimg: touimg
          })
          
      },
      fail: ()=>{},
      complete: ()=>{
        // 合并json
        setTimeout(() => {
          var josij = that.data.plb
          console.log(touimg);
          console.log(josij);
          var c = []
          for(var i = 0;i<touimg.length;i++){
              c.push(Object.assign(touimg[i],josij[i]))
          }
          that.setData({
            plxub:c
          })
          
        },1000);
   
      }
    });
   
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
  ,
  // 点赞功能

  touchlk(){
  
    var ts = this.data.like
    var tss = this.data.likestate
    this.setData({
      like:!ts,
      likestate: -tss
    })
      // 获取用户和作品id
      var appInst =  getApp();
      // console.log(appInst.globalData.info.openid);
      // console.log(this.data.zuopinid);
      // console.log(this.data.likestate);
      // 发送数据库
      var that = this
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/like.php',
        data: {
          type:1,
          typelike:1,
          zuopinid:that.data.zuopinid,
          userid:appInst.globalData.info.openid,
          likestate:that.data.likestate
        },
        header:{"content-type": "application/x-www-form-urlencoded"},
        method: 'POST',
        success: (result)=>{
            console.log(result);
            
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      
  },

  // 收藏

  touchsc(){
    var ts = this.data.shoucang
    var tss = this.data.shoucangstate
    this.setData({
      shoucang:!ts,
      shoucangstate: -tss
    })
      // 获取用户和作品id
      var appInst =  getApp();
     
      var that = this
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/shoucang.php',
        data: {
          type:1,
          typelike:1,
          zuopinid:that.data.zuopinid,
          userid:appInst.globalData.info.openid,
          likestate:that.data.shoucangstate
        },
        header:{"content-type": "application/x-www-form-urlencoded"},
        method: 'POST',
        success: (result)=>{
            console.log(result);
            
        },
        fail: ()=>{},
        complete: ()=>{}
      });

  },
// 评论内容双向绑定
pinglunlll(e){
  var that = this
  uklie.inputs(that,e,"pinglun")
},

  // 评论按钮
  pingluning(){
      // 评论内容
      var content = this.data.pinglun
      // 用户id
      var appInst =  getApp();
      // var user_id =  appInst.globalData.info.openid
      // 作品id
      var zpid = this.data.zuopinid
      var that = this
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/pinglun.php',
        data: {
            type :1 ,
            userid :  appInst.globalData.info.openid,
            zpdid :zpid,
            content:content
        },
        header:{"content-type": "application/x-www-form-urlencoded"},
        method: 'POST',
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
      });
  }

})