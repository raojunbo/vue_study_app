<template>
  <div>
    <h2>学生名字{{name}}</h2>
    <h2>学生年龄{{age}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
<script>
//最完整的简写
export default {
  name: "School",
  data() {
    return {
      name: "张三",
      age: "20"
    };
  },
  methods: {
    showName() {
      alert("来了");
    }
  }
};
</script>