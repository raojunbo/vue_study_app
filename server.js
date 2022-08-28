const express = require('express')
const app = express()
// 这是一个服务器
app.use((request, response, next) => {
    console.log("有人请求服务器1了")
    next()
})

app.get('/students',(request, response) => {
    const students = [
        {id:'001', name:'tom',age:18},
        {id:'002', name:'jerry', age:19},
        {id:'003', name:'tony', age:120}
    ]
    response.send(students)
})

app.listen(5001,(err) => {
    if(!err) {
        console.log("服务器1启动成功了")
    }
})
