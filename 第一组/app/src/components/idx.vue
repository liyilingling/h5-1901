<template>
  <div id="idx" class="iconfont">
    <ul class="a_footer">
      <li>
        <a href="#/">
          <div><i>&#xe627;</i></div>
          <p>首页</p>
        </a>
      </li>
      <li>
        <a href="#/no2">
          <div><i>&#xe610;</i></div>
          <p>服务</p>
        </a>
      </li>
      <li>
        <a href="#/no3">
          <div><i>&#xe63c;</i></div>
          <p>卖二手</p>
        </a>
      </li>
      <li>
        <a href="#/no4">
          <div><i>&#xe631;</i></div>
          <p>消息</p>
        </a>
      </li>
      <li>
        <a href="#/no5">
          <div><i>&#xe62a;</i></div>
          <p>我的</p>
        </a>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Idx"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#app .a_footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #fff;
}
#app .a_footer li {
  width: 20%;
  text-align: center;
  float: left;
}
i {
  font-style: normal;
}
</style>
