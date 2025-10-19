const http=require('http')
const server=http.createServer((request, response)=>

{
response.write("welcome server");
response.end()

})

server.listen(3300);