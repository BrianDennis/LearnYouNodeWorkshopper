var net = require("net");

var port = process.argv[2];

var server = net.createServer(function (socket){
  socket.write(getTime());
  socket.end();
});

server.listen(port);


var getTime = function(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  console.log(hour);

  return year + "-" + ((month.toString().length > 1) ? month : "0" + month) + '-' + ((day.toString().length > 1) ? day : '0'+day) + " " + hour + ":" + minute ;

};
