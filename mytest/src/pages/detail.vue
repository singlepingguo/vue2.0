<template id="index">
  <div class="container">
    <div>{{photoId}}</div>
    {{msg}}
  </div>
</template>

<script>
export default {
  props: ['photoId'],
  name: '',
  data () {
    return {
      msg: '我是详情'
    }
  },
  methods: {
    // console.log(1234567)
    // console.log(this.$vm.$route.params)
  }
}
</script>
