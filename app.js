// Can make path for own files using require using ./; automatically adds .js
const http  = require('http')
const fs = require('fs');
const { parse } = require('path/posix');

// Must take in a request and a response for create server
function rqListener(req, res){ 

}

// Takes request listener as argument. Only pass name don't execute
// const server = http.createServer(rqListener)

// Can also use anonymous function or an arrow function. Event driven architecture
// Create server callback function
const server = http.createServer( (req, res) =>
{

    // Store url
    const url = req.url;
    const method = req.method;

    if (url === '/')
    {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        // Post request different from Get request
        res.write('<body><form action="/message" method ="POST"><input type="text" name="message"><button type ="submit">Send</button ></input></form></body>')
        res.write('</html>')
        // Return lets script quit here
        return res.end()
    }    

    // Route request
    if(url === '/message' && method === 'POST')
    {
        const body = []
        // Event Listener. Let us listen to certain events
        req.on('data', (chunk) => 
        {
            // Constantly add chunk to our body array
            body.push(chunk)
            console.log(chunk)
            console.log()
        })
        
        // Event Listener. Once request is finished parsing
        return req.on('end', () => 
        {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => 
            {
                // 302 is for redirections
                res.statusCode = 302;
                // Redirects request to /
                res.setHeader('Location', '/')
                return res.end()
            })
        })    
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body>Hello From my Node.js Server</body>')
    res.write('</html>')
    res.end()

})

// Node JS keeps script running to listen for incoming requests. Optional arguments.
// Default Port 80 and local host by default
server.listen(3000)

/*

After executing file, script starts.

Event loop: Loop process that keeps running as long as there 
are event listeners registered (request listener).

Single threaded javascript

process.exit to unregister (typically don't do this) hard exit event loop

Request object has data, headers, and functions.
Headers are metadata added to requests and responses

Get is a a default http method if you enter url in browser
*/