<!--  -->
<template>
    <div class="warp">
        <header>
            <router-link tag="span" to="/main/home/attention">关注</router-link>
            <router-link tag="span" to="/main/home/recomment">推荐</router-link>
            <router-link tag="span" to="/main/home/hot">热榜</router-link>
        </header>
        <div>
            <router-view></router-view>
        </div> 
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
header{
    height: 45px;
    border-bottom: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        height: 100%;
        width: 20%;
        text-align: center;
        line-height: 45px;
    }
    span.router-link-active{
        color: aqua;
    }
}
    
</style>