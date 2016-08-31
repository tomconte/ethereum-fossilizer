# Ethereum Fossilizer

This is a demo project that shows how an Ethereum Smart Contract can be used to "fossilize" documents in a blockchain. The intent is to store the hash of a document, together with some metadata, to serve as later proof of existence of said document. The same principle can also be used for e-mails, as shown in the [fossilizer-addin](https://github.com/tomconte/fossilizer-addin) demo running within Outlook 365.

This project consists of a DApp, written using the [Truffle](https://truffle.readthedocs.io/en/latest/) framework, that runs on your local machine and allows you to drag and drop documents into a directory to fossilize the document. It also exposed a Web page that allows you to see documents and e-mails being fossilized, and check the existence of a document by entering its hash.

## Testing using a private blockchain

I recommend using a private blockchain for development and testing so that you don't have to pay actual Ether. You could also use [EthereumJS TestRPC](https://github.com/ethereumjs/testrpc) as recommended in the Truffle documentation. 

You can follow our [Ethereum "Blockchain as a service" on Azure tutorial](https://github.com/Azure/azure-blockchain-projects/tree/master/baas-artifacts/linux-go-ethereum) to quickly create a Linux VM running a private node.

## Running the application

You will need to install the [Truffle](https://github.com/ConsenSys/truffle) tool. Follow the [official Truffle documentation](http://truffle.readthedocs.io/en/latest/) for installation instructions (hint: it requires Node.JS).

- Compile and deploy the contract

```
truffle compile
truffle deploy
```

- Build and run the application

```
truffle build
truffle serve
```

- Run the fossilizer process

```
node watcher.js
```

## Using the application

The watcher process looks into its `root` subdirectory for documents. Just copy or move a document into this directory to fossilize it.

To access the DApp interface, point your browser to http://localhost:8080. This will display a log of documents or e-mails being fossilized. You can also paste an `sha256` hash of a document to check for its existence.
