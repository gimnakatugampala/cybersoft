const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{

    res.getHeader('Content-type','text/html')
    let path = './views/';

    switch(req.url){
        case '/':
        path += 'index.html'
        res.statusCode = 200
        break;

        case '/about':
        path += 'about.html'
        res.statusCode = 200
        break;

        case '/contact':
        path += 'contact.html'
        res.statusCode = 200
        break;

        case '/services':
        path += 'services.html'
        res.statusCode = 200
        break;

        case '/thanks':
        path += 'thanks.html'
        res.statusCode = 200
        break;

        case '/styles':
        path += '../assets/style.css'
        res.statusCode = 200
        break;

        case '/showcase.jpg':
        path += '../assets/img/showcase.jpg'
        res.statusCode = 200
        break;

        case '/1.jpg':
        path += '../assets/img/1.jpg'
        res.statusCode = 200
        break;

        case '/2.jpg':
        path += '../assets/img/2.jpg'
        res.statusCode = 200
        break;

        case '/3.jpg':
        path += '../assets/img/3.jpg'
        res.statusCode = 200
        break;

        case '/4.jpg':
        path += '../assets/img/4.jpg'
        res.statusCode = 200
        break;

        case '/5.jpg':
        path += '../assets/img/5.jpg'
        res.statusCode = 200
        break;

        case '/6.jpg':
        path += '../assets/img/6.jpg'
        res.statusCode = 200
        break;
    

        default:
        path += '404.html'
        res.statusCode = 404
        break;
    }

    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err)
            res.end()
        }
        res.end(data)
    })
})

server.listen(3000,'localhost',() =>{
    console.log('liteneing at port 3000')
})