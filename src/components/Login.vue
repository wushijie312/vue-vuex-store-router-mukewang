<template>
  <div>
    <form v-if="!isReg">
      <p>
        <label for>用户名</label>
        <input type="text" v-model="name">
      </p>
      <p>
        <label for>密码</label>
        <input type="text" v-model="password">
      </p>

      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else>
      <p>
        <label for>用户名</label>
        <input type="text" v-model="name">
      </p>
      <p>
        <label for>密码</label>
        <input type="text" v-model="password">
      </p>
      <p>
        <label for>确认密码</label>
        <input type="text" v-model="repeat">
      </p>

      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancal()">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    reg() {
      this.isReg = true;
    },
    login() {
      var name = localStorage.getItem("name");
      var password = localStorage.getItem("password");
      console.log(name,password);
      if (name == this.name && password == this.password) {
        this.$router.push("/home/list");
      }else{
        alert("用户名密码不正确！");
      }
    },
    addUser() {
      if (this.password == this.repeat ) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        this.password='';
        this.name='';
        this.isReg = false;
      }else{
        alert("两次输入不正确！");
      }
    },
    cancal() {
      this.isReg = false;
    }
  }
};
</script>

