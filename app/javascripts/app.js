var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshAccount() {
  var fossilizer = Fossilizer.deployed();

  var n = 42;

  var nbdocs_element = document.getElementById("nbdocs");
  nbdocs_element.innerHTML = n;
};

function checkHash() {
  var fossilizer = Fossilizer.deployed();

  var hash = document.getElementById("hash").value;

  setStatus("Initiating transaction... (please wait)");

  // First, check for a document
  fossilizer.documents.call(hash, {from: account}).then(function(result) {
    console.log(result);
    if (result[0] != '0x0000000000000000000000000000000000000000')
      setStatus("<b>Document</b> found!<br>Name: <b>" + result[1] + "</b> from computer: " + result[2]);
    else {
      // If no document was found, check for an e-mail
      fossilizer.emails.call(hash, {from: account}).then(function(result) {
        console.log(result);
        if (result[0] != '0x0000000000000000000000000000000000000000')
          setStatus("<b>Email</b> found!<br>Subject: <b>" + result[1] + "</b> from: " + result[2] + " to: " + result[3]);
        else
          setStatus("No Document or Email found for that hash!");
        refreshAccount();
      }).catch(function(e) {
        console.log(e);
        setStatus("Error calling function; see log.");
      });
    }
    refreshAccount();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error calling documents function; see log.");
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshAccount();
  });
}
