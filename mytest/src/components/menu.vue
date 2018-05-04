<template id="menuList">
  <div class="menuList font_l">
    <ul class="container">
      <li class="home" v-bind:class="{active:index===1}"><router-link to="/home"><i></i><b>首页</b></router-link></li>
      <li class="community" v-bind:class="{active:index===2}"><router-link to="/community"><i></i><b>社区</b></router-link></li>
      <li class="omnibus" v-bind:class="{active:index===3}"><router-link to="/omnibus"><i></i><b>精选</b></router-link></li>
      <li class="mine" v-bind:class="{active:index===4}"><router-link to="/mine"><i></i><b>我的</b></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['index'],
  name: 'Menu',
  data () {
    return {
      msg: '',
      title: 'menuList'
    }
  }
}
</script>
<style type="text/css">
@import "../assets/css/menu.css";
</style>
