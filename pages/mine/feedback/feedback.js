
Page({
    // data
    data: {
        // 名字
        feedbackContent: 'wujunyang',
    },

    sumitInfos: function (event) {
        wx.showModal({
            title: '提示',
            content: '确定要进行提交交？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                }
            }
        })
    }
})
