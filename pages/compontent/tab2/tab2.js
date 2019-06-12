// pages/compontent/tab2/tab2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    chuzhao(){
      wx.navigateTo({
        url: `/pages/others/chuzhao/chuzhao`,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  }
})
