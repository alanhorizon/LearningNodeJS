// import node.js modules
var http = require('http');

// handler function to pass into http.createServer
// request event emited each time there is a request
// function (request, response) { }
// req object stores request parameters;
// res object stores intended response to be sent back
function handle_incoming_request(req, res) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.end(JSON.stringify( { error: null }) + "\n");
}

// http.createServer([requestListener]): returns new web server object
// http://nodejs.org/api/http.html#http_http_createserver_requestlistener
// requestListener function  automatically added to the 'request' event. 
var s = http.createServer(handle_incoming_request);
// http.Server http://nodejs.org/api/http.html#http_class_http_server

// start server
s.listen(8080);

// test with:
// $ curl -X GET http://localhost:8080/anything_here (case sensitive)
// should print INCOMING REQUEST: GET /anything_here

function load_album_list(callback) {
    // standard function callback(error, results) format
    fs.readdir(
	"albums/",
	function (err, files) {
	    if (err) {
		callback(err);
		return;
	    }
	    callback(null, files);
	}
    );
}

