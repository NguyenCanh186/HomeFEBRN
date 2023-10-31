export default {
  data() {
    return {
      loading: null
    }
  },
  methods: {
    showLoading() {
      this.loading = this.$loading({
        lock: true,
        text: 'Đang tải'
      })
      setTimeout(() => {
        this.hideLoading()
      }, 2000)
    },
    hideLoading() {
      this.loading.close()
    }
  }
}

