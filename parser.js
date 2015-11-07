var casper = require('casper').create();
var URL = "https://acade.niu.edu.tw/NIU/Application/TKE/PRG/PRG1100_01.aspx?ayearsms=1041";

casper.start(URL, function(){
  console.log("Loaded");

  this.click("#QUERY_BTN1");
});

casper.then(function(){
  this.echo(this.getHTML());

  console.log("Clicked");
});

casper.run();
