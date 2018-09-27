<template id="">
  <div class="container">
    <div class="title">{{msg}}</div>
    <div class="photo_box">
      <div class="photo_item" @click="openPhoto()">
        <p class="photo_name vintage2" style="font-size: 3rem;">{{photo.name}}</p>
        <p class="photo_describe">{{photo.classify}}</p>
        <p class="photo_data">{{photo.createData}}</p>
      </div>
      <ul :class="{photo_pages:true,on:open}">
        <li class="photo_page" :class="{turn_page:index>n,turn_left:index>n,current:index==n}" :style="{'z-index':index>=n?999:999-n}" v-bind:data-pageOpen="0" v-for="n in photo.page" v-bind:key="n"  @click="changePage(n)">
          <img src="../assets/img/edite/feather4.png"/>
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
      index: 0,
      open: false,
      timeOut: null,
      timeOut1: null
    }
  },
  methods: {
    // 打开关闭封皮
    openPhoto () {
      console.log(this.index)
      let classList = event.currentTarget.classList
      if (this.open) {
        classList.add('turn_right')
        this.open = false
        this.index = 0
        this.timeOut1 = setTimeout(() => {
          classList.remove('turn_none')
        }, 800)
      } else {
        classList.add('current', 'turn_left')
        classList.remove('turn_right')
        this.index = 1
        this.timeOut1 = setTimeout(() => {
          classList.add('turn_none')
        }, 800)
        this.timeOut = setTimeout(() => {
          this.open = true
        }, 2000)
      }
    },
    // 翻页效果
    changePage (n) {
      console.log(n)
      console.log(this.index)
      let _this = event.currentTarget
      if (n >= this.photo.page) {
        alert('已经最后一页了哦')
      } else {
        console.log(event.currentTarget.dataset.pageopen)
        if (event.currentTarget.dataset.pageopen === '1') {
          event.currentTarget.dataset.pageopen = '0'
          _this.classList.add('turn_right')
          _this.style.zIndex = '1000'
          this.timeOut1 = setTimeout(() => {
            _this.classList.remove('turn_page')
          }, 500)
          this.timeOut = setTimeout(() => {
            this.index--
            _this.style.zIndex = 999 - n
          }, 2000)
        } else {
          event.currentTarget.dataset.pageopen = '1'
          _this.classList.add('turn_left')
          this.timeOut1 = setTimeout(() => {
            this.index++
            _this.classList.add('turn_page')
          }, 500)
        }
      }
    }
  },
  destroyed () {
    window.clearTimeout(this.timeOut)
    window.clearTimeout(this.timeOut1)
  }
}
</script>
<style type="text/css" scoped>
  @import "../assets/css/detail.css";
</style>
