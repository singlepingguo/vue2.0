<template id="TopBar">
  <div class="topbar">
    <div class="top_info">
      <div class="cityPOST" id="cityPOST" onclick="">
        <p class="send" id="choseCommonAddress">
          <i id="shows"></i>当前位置： 全国平台
          <template v-if="isLogin">
            <a class="top_member_a" style="margin-left:10px;"
               href="<%= configUtil.url_fenzhan%>/member/index">[会员中心]</a>
            <a class="top_member_a" href="<%= configUtil.url_fenzhan%>/member/logout">[退出]</a>
          </template>
          <template v-else>
            <a class="top_member_a" v-if='!isLogin' style="margin-left:10px;"
               href="<%= configUtil.url_fenzhan%>/public/selectsubstation?source=zongzhan">[切换平台] </a>
            <a class="top_member_a" href="<%= configUtil.url_fenzhan%>/member/login">[请登录]</a>
            <a class="top_member_a" href="<%= configUtil.url_fenzhan%>/public/selectsubstation?flag=register">[快速注册]</a>
          </template>
        </p>
      </div>
      <div class="tel">服务热线：<font>400-628-6121</font></div>
    </div>
    <router-link to="/hello"><button>点击一下看看</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      isLogin: 'true'
    }
  }
}
</script>
