<template>
  <div id="app">
    <van-tabbar route active-color="#ee0a24" v-if="isShow">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/topic" icon="coupon-o">专题</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="notes-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route(to, from) {
      let routerArr = ['/home', '/topic', '/category', '/cart', '/mine'];
      if (routerArr.includes(to.path)) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  data() {
    return {
      isShow: true,
    }
  },
  created() {
    // 模拟登录用户的信息
    let userInfo = {
      "openId": "111",
      "nickName": "赵六",
      "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132"
    };
    let openId = userInfo.openId;
    localStorage.setItem('userInfo', userInfo);
    localStorage.setItem('openId', openId);
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
