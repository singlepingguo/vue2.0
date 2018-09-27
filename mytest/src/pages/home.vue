<template id="">
  <div class="container">
    <div class="header">
      <div class="title font_m">我的相册</div>
      <div :class="{'header_fix':headerClass}" class="search_and_add clearfix">
        <iframe name="search_iframe" style="display:none;"></iframe>
        <form class="fl search_form" action="SearchPhoto" target="search_iframe">
          <input type="text" value="" class="search_cont" id="searchCont" placeholder="请输入你想找的相册名字"/>
          <button type="submit" class="search_btn">搜索</button>
        </form>
        <router-link class="newPhoto fr" to="/edite">新建相册</router-link>
      </div>
    </div>
    <div class="photo_album" ref="photoAlbum">
      <ul class="photo_list clearfix color_grey">
        <li class="photo_item" v-for="photo in photoList" v-bind:key="photo.key" :photoId="photo.photoId"
            @click="gotoDetail(photo)">
          <p class="photo_name font_g color_dgrey vintage2">{{photo.name}}</p>
          <p class="photo_describe">{{photo.classify}}</p>
          <p class="photo_data">{{photo.createData}}</p>
        </li>
      </ul>
      <div class="load_more" v-if="isMore"></div>
      <div class="no_more" v-if="noMore">--您没有更多相册了快去创建吧--</div>
    </div>
    <Menu :index="flag"/>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  data () {
    return {
      flag: 1,
      loadFlag: 1,
      isMore: false,
      noMore: false,
      pageIndex: 0,
      photoList: [
        {photoId: '0000001', name: '风景', createData: '20180302', classify: '日出江花红胜火,春来江水绿如蓝', page: 5},
        {photoId: '0000002', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活', page: 9},
        {photoId: '0000003', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景', page: 3},
        {photoId: '0000004', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅', page: 7},
        {photoId: '0000005', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活', page: 6},
        {photoId: '0000017', name: '南方之旅', createData: '20180624', classify: '停车坐爱枫林晚,霜叶红于二月花', page: 35},
        {photoId: '0000022', name: '风景', createData: '20180302', classify: '日出江花红胜火,春来江水绿如蓝', page: 8},
        {photoId: '0000006', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活', page: 20},
        {photoId: '0000014', name: '南方之旅', createData: '20180624', classify: '停车坐爱枫林晚,霜叶红于二月花', page: 15}
      ],
      scroll: '',
      cHeight: '',
      headerClass: false,
      timeOut: null
    }
  },
  components: {Menu},
  methods: {
    gotoDetail (photo) {
      console.log(JSON.stringify(photo))
      console.log(event.currentTarget)
      console.log(event.target)
      event.currentTarget.classList.add('click')
      this.timeOut = setTimeout(() => {
        this.$router.push({path: '/detail?photo=' + JSON.stringify(photo)})
      }, 800)
    },
    Scroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.scroll / (document.documentElement.clientWidth / 18.75))
      if (this.scroll / (document.documentElement.clientWidth / 18.75) > 2.5) {
        this.headerClass = true
      } else {
        this.headerClass = false
      }
      if (this.loadFlag === 1 && (document.documentElement.clientHeight + this.scroll - 100 > this.$refs.photoAlbum.offsetHeight)) {
        console.log('到底部了。。。')
        this.isMore = true
        this.loadFlag = 0
        this.timeOut = setTimeout(() => {
          this.loadMore()
        }, 1000)
      }
    },
    loadMore () {
      window.clearTimeout(this.timeOut)
      this.pageIndex++
      console.log('加载中。。。')
      // 请求下一页数据
      var datas = this.photoList
      for (var i = 0; i < 10; i++) {
        console.log(datas[i])
        this.photoList.push(datas[i])
      }
      if (this.pageIndex > 3) {
        this.noMore = true
        this.isMore = false
        return false
      } else {
        this.loadFlag = 1
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.Scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.Scroll)
  }
}
</script>
<style type="text/css" scoped>
  @import "../assets/css/home.css";
</style>
