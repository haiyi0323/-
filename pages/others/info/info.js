// pages/others/info/info.js
import unilt from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    value1:"",
    value2:"",
    value3:"",
    value5:"",
    value6:"",
    value7:"",
    value8:"",
    tempFilePaths:"",
    tempFilePaths2:"",
    tempFilePaths3:"",
    tempFilePaths4:"",
    tempFilePaths5:"",
    tempFilePaths6:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 改变初始值
      var appInst =  getApp();
      

      const kkks = appInst.globalData.info

      this.setData({
        id:options.id,
        value5:kkks.bage,
        value6:kkks.tall,
        value7:kkks.hight,
        value1:kkks.name,
        value2:kkks.phone,
        value3:kkks.jianjie,
        value8:kkks.offter,
        tempFilePaths:kkks.img1,
        tempFilePaths2:kkks.img2,
        tempFilePaths3:kkks.img3,
        tempFilePaths4:kkks.img4,
        tempFilePaths5:kkks.img5,
        tempFilePaths6:kkks.img6,

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


  img1(){
    let ids = this.data.id
    let that = this
    unilt.upload(that,"tempFilePaths",ids)
      
  },
  img2(){
    let ids = this.data.id
    let that = this
    unilt.upload(that,"tempFilePaths2",ids)
    
},
img3(){
  let ids = this.data.id
  let that = this
  unilt.upload(that,"tempFilePaths3",ids)
  
},
img4(){
  let ids = this.data.id
  let that = this
  unilt.upload(that,"tempFilePaths4",ids)
  
},
img5(){
  let ids = this.data.id
  let that = this
  unilt.upload(that,"tempFilePaths5",ids)
  
},
img6(){
  let ids = this.data.id
  let that = this
  unilt.upload(that,"tempFilePaths6",ids)
  
},


// 基本信息

banling: function(e) {
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value5")

},
taller(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value6")
},
hight(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value7")
},
name(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value1")
},
teleber(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value2")
},
jianjie(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value3")
},
sool(e){
  let jifds = e
  let that = this;
  unilt.inputs(that,jifds,"value8")
},

// 点击更新
handleClick(e){
  var that = this;
  wx.request({
      url: 'https://haveideal.club/xiaochengx/other/info.php',
      data: {
          type:3,
          id:that.data.id,
          bage:that.data.value5,
          tall:that.data.value6,
          hight:that.data.value7,
          name:that.data.value1,
          phone:that.data.value2,
          jianjie:that.data.value3,
          zhiye:that.data.value8
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

// 输入框快捷
ddsdf(){

  var jiiwe = this.data.value5+"年"
  console.log(jiiwe);
  
  this.setData({
    value5: jiiwe
  })

},
ddsdf2(){

  var jiiwe = this.data.value6+"cm"
  console.log(jiiwe);
  
  this.setData({
    value6: jiiwe
  })

},
ddsdf3(){

  var jiiwe = this.data.value7+"kg"
  console.log(jiiwe);
  this.setData({
    value7: jiiwe
  })

}
})