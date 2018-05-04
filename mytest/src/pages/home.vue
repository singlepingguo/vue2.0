<template id="index">
  <div class="container">
    <div class="header">
      <div class="title font_m"><p>我的相册</p></div>
    </div>
    <div class="photo_album">
      <ul class="photo_list clearfix color_grey">
        <li class="photo_item" v-for="(photo,index) in photoList" v-bind:key="photo.key" v-if="index < 10" :photoId="photo.photoId" @click="gotoDetail(photo.photoId)">
            <p class="photo_name font_g color_dgrey vintage2">{{photo.name}}</p>
            <p class="photo_describe">{{photo.classify}}</p>
            <p class="photo_data">{{photo.createData}}</p>
        </li>
      </ul>
      <div class="load_more" v-if="isMore">加载更多</div>
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
      isMore: false,
      photoList: [{photoId: '0000001', name: '风景', createData: '20180302', classify: '日出江花红胜火,春来江水绿如蓝'},
        {photoId: '0000002', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活'},
        {photoId: '0000003', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景'},
        {photoId: '0000004', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅'},
        {photoId: '0000005', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活'},
        {photoId: '0000006', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景'},
        {photoId: '0000007', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅'},
        {photoId: '0000008', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活'},
        {photoId: '0000009', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景'},
        {photoId: '0000010', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅'},
        {photoId: '0000011', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活'},
        {photoId: '0000012', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景'},
        {photoId: '0000013', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅'},
        {photoId: '0000014', name: '通州生活', createData: '20170312', classify: '点点滴滴构成了生活'},
        {photoId: '0000015', name: '奥林匹克风景', createData: '20140501', classify: '那一抹独到的风景'},
        {photoId: '0000016', name: '奥林匹克风景奥林匹克风景', createData: '20140501', classify: '疏影横斜水清浅'},
        {photoId: '0000017', name: '南方之旅', createData: '20180624', classify: '停车坐爱枫林晚,霜叶红于二月花'}]
    }
  },
  components: {Menu},
  methods: {
    gotoDetail: function (photoId) {
      console.log(photoId)
      this.$router.push({path: '/detail', params: { photoId: photoId }})
    }
  }
}
</script>
<style type="text/css">
  @import "../assets/css/home.css";
</style>
