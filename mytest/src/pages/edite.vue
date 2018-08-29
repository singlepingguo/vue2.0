<template id="edite">
  <div class="container" :style="{'height':height + 'px'}">
    <div class="title">编辑相册</div>
    <form class="fl photo_form" action="savePhoto">
      <div class="border_little"></div>
      <div class="border_big"></div>
      <ul class="edite_box">
        <li class="edite_item">
          <label class="edite_item_name" for="photoName">相册名字：</label>
          <input type="text" class="edite_item_input" value="" id="photoName" placeholder="请输入相册名字" maxlength="10"/>
        </li>
        <li class="edite_item">
          <label class="edite_item_name" for="photodescribe">添加描述：</label>
          <textarea type="text" class="edite_item_text" value="" id="photodescribe" placeholder="请对你的相册添加描述"
                    maxlength="40"></textarea>
        </li>
        <li class="edite_item labels clearfix">
          <div class="edite_item_name fl" for="photoName">选择标签：</div>
          <div class="labels_box fl">
            <span v-for="item in labels" v-bind:key="item.key" @click="item.isSelect = !item.isSelect" v-bind:data-index="item.key" :class="{'label_item':true,'on':item.isSelect}">{{item.name}}</span>
          </div>
          <div class="labels_control fr">
            <span class="label_add" v-on:click="labelsAdd()">+</span>
            <span class="label_del" @click="labelsDel()">删除</span>
            <span class="label_edite" @click="labelsEdite()">编辑</span>
            <input v-show="isLabelInpShow" type="text" class="label_input" maxlength="10" id="labelInput" ref="labelInput" value=""/>
            <span v-show="isLabelInpShow" class="finished" @click="labelfinished()">完成</span>
          </div>
        </li>
        <li class="edite_item">
          <label class="edite_item_name">设置权限：</label>
          <div class="radio_box">
            <input type="radio" name="permission" id="toAll" checked/><label class="edite_item_qx"
                                                                             for="toAll">公开</label>
            <input type="radio" name="permission" id="toFriend"/><label class="edite_item_qx"
                                                                        for="toFriend">好友可见</label>
            <input type="radio" name="permission" id="toMyself"/><label class="edite_item_qx"
                                                                        for="toMyself">仅自己可见</label>
          </div>
        </li>
        <li class="save_btns">
          <span class="save_btn cansle" @click="$router.back(-1)">取消</span>
          <button class="save_btn reset" type="reset">重置</button>
          <button class="save_btn save" type="submit">保存</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '编辑编辑',
      photoId: this.$route.query.photoId ? this.$route.query.photoId : '',
      labels: [
        {name: '心情', isSelect: false},
        {name: '风景', isSelect: false},
        {name: '生活', isSelect: false},
        {name: '兴趣', isSelect: false},
        {name: '运动', isSelect: false},
        {name: '旅游', isSelect: false}
      ],
      isEdite: false,
      isLabelInpShow: false,
      height: document.documentElement.clientHeight
    }
  },
  methods: {
    loadstart: function () {
      // console.log(this.$route.query)
      this.photoId = this.$route.query.photoId
      // console.log(this.photoId)
    },
    labelsAdd () {
      if (this.isEdite) {
        return false
      } else if (this.labels.length >= 15) {
        alert('最多只可以添加15个标签哦')
      } else {
        this.isLabelInpShow = true
      }
    },
    labelsDel () {
      let newLabels = []
      for (let i = 0; i < this.labels.length; i++) {
        if (!this.labels[i].isSelect) {
          newLabels.push(this.labels[i])
        }
      }
      this.labels = newLabels
    },
    labelsEdite () {
      let selects = []
      for (let i = 0; i < this.labels.length; i++) {
        if (this.labels[i].isSelect) {
          selects.push({index: i, cont: this.labels[i]})
        }
      }
      console.log(selects)
      console.log(selects.length)
      if (selects.length !== 1) {
        alert('请选择一个标签进行编辑')
      } else {
        console.log(selects[0].cont)
        this.isLabelInpShow = true
        this.isEdite = true
        this.$refs.labelInput.value = selects[0].cont.name
      }
    },
    labelfinished () {
      let newName = this.$refs.labelInput.value
      if (newName.length === 0) {
        alert('请输入内容后再保存')
        return
      }
      if (this.isEdite) {
        for (let i = 0; i < this.labels.length; i++) {
          if (this.labels[i].isSelect) {
            this.labels[i].name = newName
          }
        }
      } else {
        this.labels.push({name: newName, isSelect: true})
      }
      this.isLabelInpShow = false
      this.isEdite = false
      this.$refs.labelInput.value = ''
    }
  }
}
</script>
<style type="text/css" scoped>
  @import "../assets/css/edite.css";
</style>
