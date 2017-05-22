var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var root = __dirname;

function send_msg_404(res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Error 404: Resource Not Found!');
    res.end();
};

function show_indexHTML_200(res, absPath, data){
    res.writeHead(200, {'Content-Type': mime.lookup(path.basename(absPath))});
    var stream = fs.createReadStream(root + '/data/data.csv');
    res.end(data);
};

function send_msg_200(res, absPath){
    fs.exists(absPath, function(exists){
        if(exists){
            fs.readFile(absPath, function(err, data){
                if(err){
                    send_msg_404(res);
                } else{
                    show_indexHTML_200(res, absPath, data);
                }
            });
        } else{
            send_msg_404(res);
        }
    });
};

var server = http.createServer(function(req, res){
    var filePath = false;
    if(req.url == '/'){
        filePath = '/public/index.html';
    } else{
        filePath = '/public' + req.url;
    };
    var absPath = root + filePath;
    send_msg_200(res, absPath);
});

server.listen(8080);


