const http=require("http")
const server=require('./server')
const app=http.createServer(server)

app.listen(3001,console.log("app is running"))