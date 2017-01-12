// 自定义标签
var app = getApp()

Page({
    // data
    data: {
        // 名字
        managerName: '施工管理人员'
    },

    showPassword: function (event) {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                }
            }
        })
    }
})