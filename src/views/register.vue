<!-- 注册 -->
<template>
    <div>
         <div class="header">圈子注册</div>
       <p><input type="text" placeholder="用户名" v-model="userName"></p> 
       <p><input :type="this.pass" placeholder="密码" v-model="userPwd"><i @click="btn">显</i></p> 
       <router-link to="/home/timeline" tag="span">
          <button @click="register">注册</button> 
        </router-link>
    </div>
</template>

<script>
import {register} from '../service/index'
export default {
  data () {
    return {
        pass:'password',
        userName:'',
        userPwd:''
    };
  },


  methods: {
       btn(){
          if(this.pass=='password'){
              this.pass='text'
          }else{
              this.pass='password'
          }
      },
      async register(){
          let {userName,userPwd} = this
          let result = await register({userName,userPwd})
          console.log('result...',result)
          if(result&&result.data.code ===0){
              alert(result.data.msg)
          }else{
              window.history.back()
          }
      }
  }
}

</script>
<style lang='scss' scoped>
    input{
        width: 355px;
        height: 50px;
        background: #F2F2F2; 
        margin: 10px; 
        border: none;
        outline: none;
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
     p{
        width: 355px;
        height: 50px; 
        margin: 10px;  
        position: relative;
    }
     i{
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: .32rem;
    }
</style>