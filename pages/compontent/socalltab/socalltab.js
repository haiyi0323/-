// pages/compontent/socalltab/socalltab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    flarr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    current_scroll: 'tab1'
  },

  /**
   * 组件的方法列表
   */
  methods: {
        handleChangeScroll ({ detail }) {

          
        this.setData({
            current_scroll: detail.key
        });
    }
  },
  ready: function() { 
  
    
  },




})
