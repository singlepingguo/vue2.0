<template id="index">
  <div class="container">
    <router-link to="/topbar">{{msg}}</router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '我是个人中心'
    }
  }
}
</script>
