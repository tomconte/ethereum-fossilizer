var fs = require('fs');
var crypto = require('crypto');
var chokidar = require('chokidar');
var Web3 = require('web3');
var BigNumber = require('bignumber.js');

/*
** Setup blockchain stuff
*/

var account = '0x87b3f6def4d451c41be733b8924da66dea0caed4'; // Dev

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = account;

var fossilizer = Fossilizer.deployed();

function fossilize(path, hash) {
  console.log("new file: " + path);
  console.log(hash);
  var bn = new BigNumber(hash, 16);
  fossilizer.fossilizeDocument(bn, path, "localhost");
}

/*
** Launch watcher
*/

module.exports = function(callback) {
  chokidar.watch('./root', {ignoreInitial: true}).on('all', function(event, path) {
    if (event != 'add') return;
    fs.readFile(path, function (err, data) {
      var hash = crypto.createHash('sha256').update(data).digest('hex');
      fossilize(path, hash);
    });
  });
}
