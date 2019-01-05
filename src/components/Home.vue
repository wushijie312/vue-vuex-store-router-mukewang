<template>
  <div>
    <router-view/>
    <ul class="footer">
      <li class="icons">
        <router-link :to="{name:'list'}">新闻列表</router-link>
      </li>
      <li class="icons">
        <router-link :to="{name:'user'}">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 60px;
  height: 60px;
  display: flex;
  text-align: center;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.icons {
  flex: 1;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid #f90;
}
.icons a {
  color: #666;
  display: block;
}
.icons a.active {
  color: #fff;
  background: #f90;
}
</style>


