<template id="">
  <div class="container">
    <div class="title">个人中心</div>
    <Menu v-bind:index="flag"/>
    <img src="../assets/img/person.png" class='left person'/>
    <div class='left'>
      <div class='name'>fly</div>
      <div class='account'>账号：1321324</div>
    </div>

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
<style type="text/css" scoped>
  @import "../assets/css/common.css";
</style>
<style>
  .person{
    margin: 0.5rem;
  }
  .name{
    font-size: .8rem;
    margin-top: 0.85rem;
    text-align: left;
  }
  .account{
    color:#AAA;
    margin-top: 0.2rem;
    font-size: .6rem;
    text-align: left;
  }
</style>
