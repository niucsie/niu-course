var casper = require('casper').create({
  verbose: true,
  logLevel: "debug"
});
var SESSION_URL = "http://acade.niu.edu.tw/NIU/outside.aspx?mainPage=LwBBAHAAcABsAGkAYwBhAHQAaQBvAG4ALwBUAEsARQAvAFAAUgBHAC8AUABSAEcAMQAxADAAMABfADAAMQAuAGEAcwBwAHgAPwBhAHkAZQBhAHIAcwBtAHMAPQAxADAANAAxAA==";
var URL = "https://acade.niu.edu.tw/NIU/Application/TKE/PRG/PRG1100_01.aspx?ayearsms=1041";

casper.start(SESSION_URL).thenOpen(URL).thenClick("#QUERY_BTN1", function(){
  this.echo(this.getHTML());
});

casper.run();
