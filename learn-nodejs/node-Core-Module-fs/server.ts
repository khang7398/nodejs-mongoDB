import http, { IncomingMessage, Server, ServerResponse } from 'http'   
import fs from 'fs'
import path from 'path'

const hostname:string = '127.0.0.1'
const port:number = 5000

const server: Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200
    response.setHeader("Content-Type", 'text/html')

    // fs module
    // fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (error, result)=>{
    //     if(error) {
    //         console.log(error)
    //     }
    //     fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, 'utf-8', ()=>{
    //         if(error){
    //             console.log(error)
    //         }
    //         response.end (` <pre>Data is written to a file...</pre>`)
    //     })
    // })

    // for json responses
    fs.readFile(path.join(__dirname, 'data','user.json'), 'utf-8', (error, result)=>{
        if(error){
            console.log(error)
        }
        response.end(`<pre>${result}</pre>`)
    })

    // response.end(`<h2>welcome to  Node js Server </h2>`)
})

server.listen(port,hostname, ()=>{
    console.log(`node js Server is start at http://${hostname}:${port}`)
})