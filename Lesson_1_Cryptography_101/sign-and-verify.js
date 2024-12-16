const { Keypair } = require ("@_koii/web3.js");
const { sign, verify } = require("./library/cryptography.js");
const nacl = require("tweetnacl");
const { decodeUTF8 } = require("tweetnacl-util");

// This is an example of signing and verifying a message using the Koii keys
// The namespaceWrapper is the default library for all Koii Tasks, which can be used in production
// Read more: https://www.koii.network/docs/develop/write-a-koii-task/namespace-wrapper/wallet-signatures

// for now, we will use the underlying libraries
// check the ./library/cryptography.js file for the sign and verify functions

// Generate a sender keypair
const sender = Keypair.generate();

// define the message to be signed
const message = "Hello world!";
const messageBytes = decodeUTF8(message);
// we must convert it to a Uint8Array so that the math works for signing and verifying 

// generate the signature
const signature = sign(
    messageBytes, // must be UINT8Array
    sender // must be a keypaid object
);

console.log('sig', signature)

// verify the signature (remember, this is math, so the format of the objects is very important
const result = verify(
    messageBytes, // must be UINT8Array
    signature, 
    sender.publicKey.toBytes() // the pubkey must also be converted to a Uint8Array so that the math works
);

console.log('signature verification result: ', result);
