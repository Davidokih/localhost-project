// a port that gives you permission to connect to a ip address

//A domian  is an address that help in maping an ip address with port

//DNS 




const http = require('http')
const port = 2022

const app = http.createServer((req, res) =>{
    res.write("runing server")
    res.end()
});
app.listen(port, ()=>{
    console.log('listening on port' + port)
});








































