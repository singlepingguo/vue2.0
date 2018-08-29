<template id="">
  <div class="container">
    <div class="title">个人中心</div>
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
