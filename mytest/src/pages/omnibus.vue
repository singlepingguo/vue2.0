<template id="">
  <div class="container">
    <div class='title'>{{msg}}</div>
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
      msg: '精选'
    }
  },
  components: {Menu}
}
</script>
