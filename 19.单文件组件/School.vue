<template>
  <div>
    <h2>学校名字{{name}}</h2>
    <h2>学校地址{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
<script>
//最完整的简写
export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
      address: "北京"
    };
  },
  methods: {
    showName() {
      alert("来了");
    }
  }
};
</script>

<style>
.demo {
  background-color: brown;
}
</style>