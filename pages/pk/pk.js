// pages/pk/pk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible1: false,
    url:"../../assit/img/man.gif",
    type:"",
    current: '滑板',
    position: 'left',
    checked: false,
    disabled: false,
    fruit: [{
      id: 1,
      name: '滑板',
  }, {
      id: 2,
      name: '长板'
  }, {
      id: 3,
      name: '舞板'
  }, {
      id: 4,
      name: '自由式',
  }],

  suiji:"接下来你要完成的动作是",
  yan:" (｀＾´)ノ",
  zhaoshi:"",
  starIndex2:"",
  fenshu:"0",
  iswc:true,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 获取出招表数据
      let that = this;
      wx.request({
        url: 'https://haveideal.club/xiaochengx/other/chuzhao.php',
        data: {type:2},
        header:{"content-type": "application/x-www-form-urlencoded"},
        method: 'POST',
        success: (result)=>{
            console.log(result.data.data);
            var appInst =  getApp();
            appInst.globalData.chuzhao = result.data.data
            
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

  }
  ,

  handleClick(){
      var appInst =  getApp();
    let maxlen = appInst.globalData.chuzhao.length - 1
     let suiji = Math.round(Math.random()*maxlen)  
    console.log(suiji);
    
      this.setData ({
          url:"../../assit/img/kuai.gif",
          suiji:appInst.globalData.chuzhao[suiji].name,
          yan:"┗( ▔, ▔ )┛",
          zhaoshi:appInst.globalData.chuzhao[suiji].gif,
          starIndex2:appInst.globalData.chuzhao[suiji].nandu,
          iswc:false

      })

  },
// 放弃
handleClick2(){
  this.setData ({
    url:"../../assit/img/man.gif",
    suiji:"",
    yan:" (｀＾´)ノ",
    zhaoshi:"",
    starIndex2:"",
    iswc:true,
    suiji:"接下来你要完成的动作是",

})
},
// 完成
handleClick3(){
  let newfen =  parseInt(this.data.fenshu)  + parseInt(this.data.starIndex2)

  this.setData ({
    url:"../../assit/img/man.gif",
    suiji:"",
    yan:" (｀＾´)ノ",
    zhaoshi:"",
    starIndex2:"",
    iswc:true,
    suiji:"接下来你要完成的动作是",
    fenshu:newfen

})
},


  handleFruitChange({ detail = {} }) {
    console.log(detail);
    
    this.setData({
        current: detail.value,
        type:detail.value
    });
},
// 对话框开关
handleOpen1 () {
  this.setData({
      visible1: true
  });
},

handleClose1 () {
  this.setData({
      visible1: false
  });
},
})