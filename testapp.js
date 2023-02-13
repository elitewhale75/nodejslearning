import { createServer } from "http";

function rqListener(req, res){
    
    const url = req.url;
    const method = req.method;

        if(url === '/cringe')
        {
            res.write('<html>')
            res.write('<head><title>Cringe!</title></head>')
            res.write('</html>')
            return res.end()
        }
}

const server = createServer(rqListener)
server.listen(3000)