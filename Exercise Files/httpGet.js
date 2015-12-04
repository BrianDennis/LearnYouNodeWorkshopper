var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var url1Done = false;
var url2Done = false;
var url3Done = false;

var url1Text = "";
var url2Text = "";
var url3Text = "";

http.get(url1,callbackUrl1);
http.get(url2,callbackUrl2);
http.get(url3,callbackUrl3);

function callbackUrl1(response){

  response.setEncoding('utf8');
  response.on('data',function(data){
    url1Text += data;
  });
  response.on('end',function(){
    url1Done = true;
    checkIfOver();
  })
}

function callbackUrl2(response){

  response.setEncoding('utf8');
  response.on('data',function(data){
    url2Text += data;
  });
  response.on('end',function(){
    url2Done = true;
    checkIfOver();
  })
}

function callbackUrl3(response){

  response.setEncoding('utf8');
  response.on('data',function(data){
    url3Text += data;
  });
  response.on('end',function(){
    url3Done = true;
    checkIfOver();
  })
}

function checkIfOver(){
  if (url1Done && url2Done && url3Done){
    console.log(url1Text);
    console.log(url2Text);
    console.log(url3Text);
  }
}
