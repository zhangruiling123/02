<!-- 登录 -->
<template>
    <div>
        <div class="header">圈子登录</div>
      <p><input type="text" placeholder="用户名" v-model="userName" @blur="checkUserName"></p> 
       <p><input :type="this.pass" placeholder="登录密码" v-model="userPwd" ><i @click="btn">显</i></p> 
         <router-link to="/home/timeline" tag="span">
          <button @click="login">登录</button> 
        </router-link>
        <br>
      <router-link to="/register" tag="span">
          <span>快速注册</span> 
        </router-link>
    </div>
</template>

<script>
import {login} from '@/service/index'
export default {
  data () {
    return {
        pass:'password',
        userName:'',
        userPwd:''
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
      btn(){
          if(this.pass=='password'){
              this.pass='text'
          }else{
              this.pass='password'
          }
      },
      async login(){
          let {userName,userPwd} = this
          let result = await login({userName,userPwd})
          console.log('result...',result)
          if(result&&result.data.code === 1){

          }
          alert(result.data.msg)
      },
      checkUserName(){
          if(!/\w{3,20}/.test(this.userName))
          alert('请输入正确的用户名')
      }
  }
}

</script>
<style lang='scss' scoped>
    span,i{
           font-size: .32rem;
    }
    input{
        width: 355px;
        height: 50px;
        background: #F2F2F2; 
        border: none;
        outline: none;
    }
    p{
        width: 355px;
        height: 50px; 
        margin: 10px;  
        position: relative;
    }
    button{
        width: 355px;
        height: 50px;
        background: #F76968;
        color: #fff;
        border: none;
    }
    .header{
        height: 61px;
        background: #F2F2F2;
        font-size: .32rem;
        text-align: center;
        line-height: 61px;
    }
    i{
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>