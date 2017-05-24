// Initial modules required
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var root = __dirname; // Gives current dir path

function send_msg_404(res){
    // Helper function: File not found 404 error msg
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Error 404: Resource Not Found!');
    res.end();
};

function show_msg_200(res, absPath, data){
    // Helper function: Show html file data
    res.writeHead(200, {'Content-Type': mime.lookup(path.basename(absPath))});
    res.end(data);
};

function send_msg(res, absPath){
    // Helper function: To check if html file exists or not
    fs.exists(absPath, function(exists){
        if(exists){
            fs.readFile(absPath, function(err, data){
                if(err){
                    send_msg_404(res);
                } else{
                    show_msg_200(res, absPath, data);
                }
            })
        } else{
            send_msg_404(res);
        }
    });
};


var server = http.createServer(function(req, res){
    // Create server and attach to port
    var filePath = false;
    if(req.url == '/'){
        filePath = '/public/index.html';
    } else{
        filePath = '/public' + req.url;
    };
    var absPath = root + filePath;
    send_msg(res, absPath);
});
server.listen(80);


