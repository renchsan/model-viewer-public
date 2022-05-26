// import * as fs from 'fs';

var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';
var chunk;

readableStream.on('readable', function() {
    while ((chunk=readableStream.read()) != null) {
        data += chunk;
    }
});

readableStream.on('end', function() {
    console.log(data)
});


var xhr = new XMLHttpRequest();
xhr.open("GET", "./sweater.png");
xhr.responseType = "arraybuffer";

xhr.onload = function(error) {
    var blob = new Blob([xhr.response]);
    var blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl);
    document.getElementById("image").src = blobUrl;
}

xhr.send();


var glbXhr = new XMLHttpRequest();
glbXhr.open("GET", "./AR_Jordan_GLB_v14.glb");
glbXhr.responseType = "arraybuffer";

glbXhr.onload = function(error) {
    var blob = new Blob([glbXhr.response]);
    var blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl);
    document.getElementById("model-viewer-1").setAttribute('src', blobUrl)
}

glbXhr.send();
