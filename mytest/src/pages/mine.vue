<template id="index">
  <div class="container">
    <router-link to="/topbar">{{msg}}</router-link>
    <Menu v-bind:index="flag"/>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: '',
  data () {
    return {
      flag: 4,
      msg: '我是个人中心'
    }
  },
  components: {Menu}
}
</script>
