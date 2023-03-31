const http = require('http');
const port = 3000

const server = http.createServer(function (req, res) {
res.write("<h1>Hello Node!!!!</h1>\n")

})

server.listen(port, function (err) {
    if (err) {
        console.log("Something went wrong ", err)
    }
    else {
        console.log("server is listening on port " + port)
    }
})
