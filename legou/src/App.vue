<template>
  <div id="app">
    <van-tabbar route active-color="#ee0a24">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/topic" icon="coupon-o">专题</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="notes-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>

</style>
