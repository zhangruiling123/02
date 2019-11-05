<!-- 详情 -->
<template>
<div class="warp">
     <div>
        <router-view></router-view>
    </div>
    <footer>
        <router-link tag="span" to="/mian/home">首页</router-link>
        <router-link tag="span" to="/mian/idea">想法</router-link>
        <router-link tag="span" to="/mian/edu">大学</router-link>
        <router-link tag="span" to="/mian/message">消息</router-link>
        <router-link tag="span" to="/mian/my">我的</router-link>
    </footer>
</div>
   
</template>
<style lang="scss" scoped>
    .warp{
        height: 100%;
        display: flex;
        flex-direction: column;
        &>div{
            flex: 1;
            overflow: auto;
        }
    }
    footer{
        height: 45px;
        border-top: 1px solid #666;
        display: flex;
        align-items: center;
        justify-content: space-around;
        span{
            height: 100%;
            width: 20%;
            line-height: 45px;
            text-align: center;
        };
        span.router-link-active{
            color: aqua
        }
    }  
</style>