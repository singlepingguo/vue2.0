<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: 'App',
  components: {Menu}
}
</script>
