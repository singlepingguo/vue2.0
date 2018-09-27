<template id="">
  <div class="container">
    {{msg}}
    <Menu v-bind:index="flag"/>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: '',
  data () {
    return {
      flag: 2,
      msg: '我是社区'
    }
  },
  components: {Menu}
}
</script>
