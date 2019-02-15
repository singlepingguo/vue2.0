<template id="">
  <div class="container">
    <div class='mine-header'>
      <div>
        <span class='fr sign'>签到</span>
      </div>
      <div>
          <img src='../assets/img/mine/person.png' class='fl' style='margin:1rem 0.5rem 0px;border-radius:50%;'/>
          <div style='margin-top:1.5rem;text-align:left' class='fl'>
            <div style='font-size:0.9rem'>fly to my dream</div>
            <div style='font-size:0.7rem;color:#aaa;margin-top:0.2rem;'>账号：ertert23</div>
          </div>
          <img src='../assets/img/mine/next.png' class='fr next' />
       </div>
    </div>
    <div class='list'>
      <img src="../assets/img/mine/VIP.png" class='fl' style='width:1.3rem;margin-top:0.3rem'/>
      <span class='fl'>升级VIP</span>
      <span class='fr'>
        <span class='preferential fl' >优惠</span>
        <img src='../assets/img/mine/next1.png' class='fr next1'/>
      </span>

    </div>
    <div class='list' style='margin-top:0.3rem;border-bottom:0.05px solid #eee;'>
        <img src="../assets/img/mine/jifen.png" class='fl'/>
        <span class='fl'>积分兑换</span>
        <img src='../assets/img/mine/next1.png' class='fr next1'/>
    </div>
    <div class='list'>
      <img src="../assets/img/mine/quan.png" class='fl'/>
      <span class='fl'>优惠券</span>
      <img src='../assets/img/mine/next1.png' class='fr next1'/>
    </div>
    <div class='list' style='margin-top:0.3rem;border-bottom:0.05px solid #eee;'>
        <img src="../assets/img/mine/yijian.png" class='fl' style='width:1.1rem;'/>
        <span class='fl'>意见反馈</span>
        <img src='../assets/img/mine/next1.png' class='fr next1'/>
    </div>
    <div class='list' style='border-bottom:0.05px solid #eee;'>
      <img src="../assets/img/mine/about.png" class='fl'/>
      <span class='fl'>关于我们</span>
      <img src='../assets/img/mine/next1.png' class='fr next1'/>
    </div>
    <div class='list' style='padding-left:0.58rem'>
      <img src="../assets/img/mine/shezhi.png" class='fl' style='width:1.1rem;'/>
      <span class='fl'>设置</span>
      <img src='../assets/img/mine/next1.png' class='fr next1'/>
    </div>
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
<style>
  .mine-header{
    width:100%;
    height:7rem;
    background:#fad098;
  }
  .mine-header div{
    overflow:hidden;
  }
  .sign{
     color: #fff;
     width: 2.2rem;
     height: 1rem;
     border: 0.05px solid #fff;
     border-radius: 0.5rem;
     line-height: 1rem;
     margin: 0.5rem 0.5rem 0 0;
  }
  .next{
     margin: 2rem 0.3rem 0 0;
  }
  .list{
    background:#fff;
    width:100%;
    height:2rem;
    line-height:2rem;
    text-align:left;
    padding-left:0.5rem;
    font-size:0.7rem;
  }
  .next1{
    margin: 0.6rem 0.8rem 0 0;
  }
  .list img.fl{
    margin:0.4rem 0.5rem 0 0;
    width:1.2rem;
  }
  body{
    font-family:'微软雅黑'!important;
  }
 .preferential{
    width:1.8rem;
    height:1.1rem;
    line-height:1.13rem;
    display:inline-block;
    background:red;
    color:#fff;
    border-radius:0.3rem;
    text-align:center;
    margin-top:0.4rem;
 }
  </style>
