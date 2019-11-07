<!--  -->
<template>
    <div>
        <div class="nav">
            <p><b class="b">张杰</b></p>
            <p class="p"><span>年龄：18</span><span>活跃度32</span></p>
        </div>
        <ul>
            <li>个人信息</li>
            <li>我的评论</li>
            <li>个人收藏</li>
        </ul>
        <ul>
            <li>修改密码</li>
            <li>退出</li>
            <li>注销用户</li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.nav{
    width: 100%;
    height: 130Px;
    background: rgb(243, 109, 109);
    color: aliceblue;
}
 .b{
            margin-left: 20px;
        }
.p{
    font-size: 24px;
    span{
        margin-left: 20px;
    }
}
ul{
    margin-top: 20px;
    font-size: 22px;
    li{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
}
</style>