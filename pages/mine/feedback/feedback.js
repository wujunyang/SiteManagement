
Page({
    // data
    data: {
        // 名字
        feedbackContent: 'wujunyang',
    },

    onLoad: function () {
        console.log('onLoad')
        var that = this
    },

    myBindblur: function (e) {
        this.setData({ feedbackContent: e.detail.value });
    },

    sumitInfos: function (event) {
        wx.showModal({
            title: '提示',
            content: '确定要进行提交交？内容：' + this.data.feedbackContent,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                }
            }
        })
    }
})
