// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.getAdsFromService();
    this.getNewDataFromService();
  },
  // 下拉 获取最新的
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
    })

    this.getNewDataFromService();
    this.getAdsFromService();

    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000)

  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /*跳转到商品详情*/
  aboutUsJump: function (event) {
    wx.navigateTo({
      url: '../aboutus/aboutus'
    })
  },
  myorder: function (event) {
    wx.navigateTo({
      url: '../myorder/myorder'
    })
  },
  witeorder: function (event) {
    wx.navigateTo({
      url: '../witeorder/witeorder'
    })
  },
  overorder: function (event) {
    wx.navigateTo({
      url: '../overorder/overorder'
    })
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
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
    var that = this;
    var targetUrl = "/pages/index/index";
    // 用户点击右上角分享
    return {
      title: '分享Hello熊猫鲜生', // 分享标题
      desc: "Hello熊猫鲜生", // 分享描述
      path: targetUrl // 分享路径
    }
  }
})