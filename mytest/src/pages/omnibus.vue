<template id="">
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
      flag: 3,
      msg: '我是精选'
    }
  },
  components: {Menu}
}
</script>
