var http = require('http'), fs = require('fs');


function handle_incoming_request(req, res) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);

    load_album_list(function (err, albums) {
	if (err) {
	    res.writeHead(503, {"Content-Type": "application/json"});
	    res.end(JSON.stringify(err) + "\n:");
	    return;
	}
	
	var out = { error: null,
		    data: { albums: albums}};
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(out) + "\n");
    });
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);

// test with:
// $ curl -X GET http://localhost:8080/

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

