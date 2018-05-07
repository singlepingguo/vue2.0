<template id="index">
  <div class="container" :click="loadstart()">
    {{msg}}
    {{photoId}}
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '我是详情',
      photoId: ''
    }
  },
  methods: {
    loadstart: function () {
      // console.log(this.$route.query)
      this.photoId = this.$route.query.photoId
      // console.log(this.photoId)
    }
  }
}
</script>
