<template>
  <div>
    <p>
      <label>标题</label>
      <input type="text" v-model="title" placeholder="请输入标题">
    </p>
    <p>
      <label>内容</label>
      <input type="text" v-model="content" placeholder="请输入内容">
    </p>
    <button @click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/store';
export default {
  
  name: "Add",
  store,
  data() {
    return {
      title:'',
      content:''
    };
  },
  methods:{
    add(){
      if(this.title && this.content){
        
       store.commit('addItem',{title:this.title,content:this.content});
       this.title='';
       this.content='';
       this.$router.push('/home/list');

      }
    }
  }
};
</script>

