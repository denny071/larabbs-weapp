import wepy from 'wepy'

export default class unreadCount extends wepy.mixin {
  data = {
    interval: null,
    unreadCount: 0
  }

  onShow() {
    this.updateUnreadCount()
    this.interval = setInterval(() => {
      this.updateUnreadCount()
    }, 30000)
  }

  onHide() {
    clearInterval(this.interval)
  }

  updateUnreadCount() {
    this.unreadCount = this.$parent.globalData.unreadCount
    console.log('TCL: --------------------------------------------------------------------------')
    console.log('TCL: unreadCount -> updateUnreadCount -> this.unreadCount', this.unreadCount)
    console.log('TCL: --------------------------------------------------------------------------')
    this.$apply()

    if (this.unreadCount) {
      wepy.setTabBarBadge({
        index: 1,
        text: this.unreadCount.toString()
      })
    } else {
      wepy.removeTabBarBadge({
        index: 1
      })
    }
  }
}
