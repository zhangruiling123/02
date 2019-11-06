<!--  -->
<template>
    <div class="wrap" ref="wrap">
        <ul v-for="(item) in list" :key="item.id" @click="getDetail(item.id)">
          <div class="item">
            <p>
              <span>{{item.title}}</span>
              <span>{{item.description}}</span>
            </p>
            <img :src="item.banner" alt="">
          </div>
            <p>{{`${item.favor}赞同 ${item.comment}评论`}}</p>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
        page : 1,
        pageSize : 10,
        type:'',
    }
  },
  computed: {
    ...mapState({
      list: state=>state.list
    })
  },
 watch: {
   $route:function(){
     this.type = this.$route.params['type']
     this.page = 1
     this.getData({type:this.type,page:this.page})
   }
 },
methods: {
  ...mapActions({
      getData:'getList'
  }),
  getDetail(id){
    this.$router.push(`/detail/${id}`)
    
  }
},
mounted() {
  this.type  = this.$route.params['type']
  this.getData({type:this.type,page:this.page})
  let ele = this.$refs.wrap
  ele.onscroll = async (e)=>{
    if(this.isFetching){
      return
    }
    let height = ele.offsetHeight,
        scrollTop = ele.scrollTop,
        childHeight = ele.children[0].offsetHeight
        if(height+scrollTop>childHeight-20){
          this.isFetching = true;
          this.page++
          await this.getData({type:this.type,page:this.page})
          this.isFetching = false
        }
  }
}

}

</script>
<style lang='scss' scoped>
    .wrap{
      background: #f4f4f4;
      overflow: auto;
    }
    ul{
      background: #fff;
      margin-top: 8px;
      padding: 0 3px;
    }
    .item{
      display: flex;
      align-items: center;
      justify-content: space-around;
      span:nth-child(1){
        padding-bottom:4px;
        font-size: 20px;
      }
      span:nth-child(2){
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
          display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    img{
      width: 100px;
    }
    }
</style>