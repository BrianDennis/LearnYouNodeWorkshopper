var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request,response){

  var requestUrl = url.parse(request.url, true);
  var responseItem = "";
  if(requestUrl.pathname === "/api/parsetime")
    responseItem = parseTime(requestUrl.query.iso);
  else if (requestUrl.pathname === "/api/unixtime")
    responseItem = unixTime(requestUrl.query.iso);

  response.writeHead(200, {'content-Type': 'application/json'});
  response.end(responseItem);
});

server.listen(port);

parseTime = function(iso){

  var tIndex = iso.indexOf('T');
  var dotIndex = iso.indexOf('.');

  var time = iso.slice(tIndex + 1, dotIndex);

  var timeArray = time.split(':');

  var returnObj = {};

  returnObj.hour = Number(timeArray[0]) - 6;
  returnObj.minute = Number(timeArray[1]);
  returnObj.second = Number(timeArray[2]);

  return JSON.stringify(returnObj);

};

unixTime = function(iso){
  var date = new Date(iso);

  return JSON.stringify({unixtime: date.getTime()});
};
