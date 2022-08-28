<template>
    <div @click="getStudents">获取学生信息</div>
</template>

<script>
// 同源策略：协议名，主机名，端口号都必须相同。
// nginx可以做代理服务器
// vue-cli可做代理服务器
// axios
import axios from "axios"
export default {
    name:'App',
    methods: {
        getStudents() {
            axios.get("http://localhost:8080/students").then(
                response => {
                    console.log("请求成功了",response.data)
                },
                error => {
                    console.log("请求失败了",error.message)
                }
            )
        }
    },
}
</script>