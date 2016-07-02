var fossilizer = Fossilizer.deployed();
var emailEvent = fossilizer.EmailFossilized({}, {fromBlock: 0});
var docEvent = fossilizer.DocumentFossilized({}, {fromBlock: 0});

emailEvent.get(function(error, logs) {
  if (error) return;
  for (var i=0; i<logs.length; i++) {
    console.dir(logs[i]);
    var date = new Date(logs[i].args.timestamp.c);
    console.log(date);
  }
});

docEvent.get(function(error, logs) {
  if (error) return;
  for (var i=0; i<logs.length; i++) {
    console.dir(logs[i]);
    var date = new Date(logs[i].args.timestamp.c);
    console.log(date);
  }
});
