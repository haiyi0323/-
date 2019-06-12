// 验证数据库中有没有这个openid

function selectopenid(openid,tou) {
    wx.request({
       url: 'https://haveideal.club/xiaochengx/other/selectid.php',
       data: {id:openid,type:1},
       header:{"content-type": "application/x-www-form-urlencoded"},
       method: 'POST',
       success: (result)=>{
            
                if (result.data.data.length < 1) {
                    console.log("这家伙第一次登陆");
                    // 添加到数据库中
                     wx.request({
                        url: 'https://haveideal.club/xiaochengx/other/selectid.php',
                        data: {id:openid,type:2,toux:tou},
                        header:{"content-type": "application/x-www-form-urlencoded"},
                        method: 'POST',
                        success: (result)=>{
                            console.log(result);
                            console.log("添加进去了");
                        },
                    });
                    
                }else{
                 var appInst =  getApp();
                 console.log(appInst);
                  appInst.globalData.info = result.data.data[0];
                }
       },
       fail: ()=>{},
       complete: ()=>{}
   });
}

// 渲染图片函数
 function upload(that,img,id) {

  
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          [img] : tempFilePaths
        })
        
        var count = 0;

          
            
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
         wx.uploadFile({
            url: "https://haveideal.club/xiaochengx/other/setimage.php",
            filePath: tempFilePaths[i],
            name: 'uploadfile_ant',
            header: {
              "Content-Type": "multipart/form-data"
            },

            formData:{
              lengthwho: img,
              openid : id
            },
            success: function (res) {
              count++;
              //如果是最后一张,则隐藏等待中  
              if (count == tempFilePaths.length) {
                wx.hideToast();
              }
            },
            fail: function (res) {
              wx.hideToast();
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败',
                showCancel: false,
                success: function (res) { }
              })
            }
          });
        }  




      }
    })
  }
// input双向绑定

function inputs(that,e,where) {
    that.setData({
        [where]: e.detail.detail.value,
      })
}

// 管理端图片渲染
function xuanran(that,img) {

  
  wx.chooseImage({
    count: 9, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: res => {
      wx.showToast({
        title: '正在上传...',
        icon: 'loading',
        mask: true,
        duration: 1000
      })  
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      let tempFilePaths = res.tempFilePaths;
      console.log(tempFilePaths);
      that.setData({
        [img] : tempFilePaths
      })
      
    }
  })
}

// 管理端上传图

function uploada(api,id,gif) {

    console.log(api,id,gif);
    
  wx.uploadFile({
    url: api,
    filePath: gif,
    name: 'uploadfile',
    header: {
      "Content-Type": "multipart/form-data"
    },

    formData:{
        type:9,
        ids:id
    }
    ,
    success: function (res) {
     console.log(res);
     
    },
    fail: function (res) {
      wx.hideToast();
      wx.showModal({
        title: '错误提示',
        content: '上传图片失败',
        showCancel: false,
        success: function (res) { }
      })
    }
  });
}
// 合并json对象
function concat(jsonbject1,jsonbject2){

  var resultJsonObject = {};
  for (let i = 0; i < jsonbject1.length; i++) {
    resultJsonObject =   Object.assign( jsonbject1[i],jsonbject2[i])
 
  }
    return resultJsonObject;
  }


module.exports = {
    selectid: selectopenid,
    upload:upload,
    inputs:inputs,
    xuanran:xuanran,
    uploada:uploada,
    concat:concat
}