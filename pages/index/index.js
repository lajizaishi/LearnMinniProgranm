// var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
// Page({
//     data: {
//         tabs: [],
//         activeIndex: 1,
//         sliderOffset: 0,
//         sliderLeft: 0,
//         active:1
//     },
//     created:function(){
      
//     },
//     onLoad: function () {
//         var that = this;
//         wx.getSystemInfo({
//             success: function(res) {
//                 that.setData({
//                     sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
//                     sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
//                 });
//             }
//         });
//         wx.request({
//           url: 'http://localhost:8080/static/data.json', //仅为示例，并非真实的接口地址
//           data: {
//           },
//           header: {
//             'content-type': 'application/json' // 默认值
//           },
//           success (res) {
//             that.setData({
//               tabs:res.data.tabs
//             })
//           }
//         })
//     },
//     onChange(event){
//       wx.showToast({
//         title: `切换到标签${event.detail.name}`,
//       })
//     },
//     tabClick: function (e) {
//         this.setData({
//             sliderOffset: e.currentTarget.offsetLeft,
//             activeIndex: e.currentTarget.id
//         });
//     },
// });
var app = getApp()  
Page( {  
 data: {  
  /** 
    * 页面配置 
    */ 
  winWidth: 0,  
  winHeight: 0,  
  // tab切换  
  currentTab: 0,  
  inputshowed:false,
  "bnrUrl": []
 },  
 onLoad: function() {  
  var that = this;  
  /** 
   * 获取系统信息 
   */ 
  wx.getSystemInfo( {  
   success: function( res ) {  
    that.setData( {  
     winWidth: res.windowWidth,  
     winHeight: res.windowHeight  
    });  
   }  
  });  
  wx.request({
    url: '',
    data: {},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) {
      that.setData({
        //tabs:res.data.tabs
        "bnrUrl":res.data.bnrUrl
      })
    }
  })
 },  
 /** 
   * 滑动切换tab 
   */ 
 bindChange: function( e ) {  
  var that = this;  
  that.setData( { currentTab: e.detail.current });  
 },  
 /** 
  * 点击tab切换 
  */ 
 swichNav: function( e ) {  
  var that = this;  
  if( this.data.currentTab === e.target.dataset.current ) {  
   return false;  
  } else {  
   that.setData( {  
    currentTab: e.target.dataset.current  
   })  
  }   
 }, 
 // 使文本框进入可编辑状态
 showInput: function () {
  this.setData({
    inputShowed: true   //设置文本框可以输入内容
  });
},
// 取消搜索
hideInput: function () {
  this.setData({
    inputShowed: false
  });
},
 /** 
 * 点击分享 
 */
 onShareAppMessage: function () { 
  return { 
   title: '微信音乐播放器', 
   path: '/page/user?id=123'
  } 
 } 
})