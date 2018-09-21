<template id="">
  <div class="container">
    <div class="title">{{msg}}</div>
    <div class="photo_box" @click="openPhoto()">
      <div class="photo_item">
        <p class="photo_name vintage2" style="font-size: 3rem;">{{photo.name}}</p>
        <p class="photo_describe">{{photo.classify}}</p>
        <p class="photo_data">{{photo.createData}}</p>
      </div>
      <ul class="photo_pages">
        <li :class="{photo_page:true,current:n==index}" v-for="n in photo.page" v-bind:key="n"  @click="changePage(n)">
          <div class="foot_page">第{{n}}页</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '我是详情',
      photo: JSON.parse(this.$route.query.photo),
      index: 0
    }
  },
  methods: {
    openPhoto () {
      console.log(this.index)
      this.index++
      console.log(event.currentTarget.childNodes.length)
    },
    changePage (n) {
      console.log(n)
      if (n >= this.photo.page) {
        alert('已经最后一页了哦')
      } else {
        this.index++
      }
    }
  }
}
</script>
<style type="text/css" scoped>
  @import "../assets/css/detail.css";
</style>
