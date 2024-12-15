const nacl = require('tweetnacl');
const bs58 = require('bs58');
const ed2curve = require('ed2curve');
const encode = require('../adapters/encoder.js');
const decode = require('../adapters/decoder.js');
const { PublicKey } = require('@_koii/web3.js');

/*
    Sign a message with a secret key
    @param {Uint8Array} messageBytes - The message to sign
    @param {Uint8Array} keypair - The keypair to sign with
    @returns {Uint8Array} - The signature
*/
function sign(messageBytes, keypair) {

    let signature = nacl.sign.detached(messageBytes, keypair.secretKey);
    return signature;

}

/*
    Verify a message with a public key
    @param {Uint8Array} messageBytes - The message to verify
    @param {Uint8Array} signature - The signature to verify
    @param {Uint8Array} publicKey - The public key to verify with
    @returns {boolean} - The result of the verification
*/
function verify(messageBytes, signature, publicKey) {
    
    return nacl.sign.detached.verify(
        messageBytes,
        signature,
        publicKey 
    );

}

/*
    Encrypt a message
    @param {string} message - The message to encrypt
    @param {Uint8Array} nonce - The nonce to use to encrypt the message
    @param {string} publicKey_receiver - The public key of the receiver
    @param {Uint8Array} privateKey_sender - The private key of the sender
    @returns {Uint8Array} - The encrypted message
*/
function encrypt(message, nonce, publicKey_receiver, privateKey_sender){

    const curve25519PrivateKey_sender = ed2curve.convertSecretKey(privateKey_sender);
    const curve25519PublicKey_receiver = ed2curve.convertPublicKey(
        bs58.decode(publicKey_receiver)
      );

    const messageUint8 = encode(message);
    const encrypted = nacl.box(messageUint8, nonce, curve25519PublicKey_receiver, curve25519PrivateKey_sender);
    return encrypted;

}

/* 
    Decrypt an encrypted message
    @param {Uint8Array} encrypted - The encrypted message
    @param {Uint8Array} nonce - The nonce used to encrypt the message
    @param {string} publicKey_sender - The public key of the sender
    @param {Uint8Array} privateKey_receiver - The private key of the receiver
    @returns {string} - The decrypted message
*/
function decrypt(encrypted, nonce, publicKey_sender, privateKey_receiver){

    const curve25519PrivateKey_receiver = ed2curve.convertSecretKey(privateKey_receiver);
    const curve25519PublicKey_sender = ed2curve.convertPublicKey(
        bs58.decode(publicKey_sender)
      );

    const decrypted = nacl.box.open(encrypted, nonce, curve25519PublicKey_sender, curve25519PrivateKey_receiver);
    const decryptedMessage = decode(decrypted);
    return decryptedMessage;

}

/*
    Generate a nonce
    @returns {Uint8Array} - A random nonce
*/
function nonce(){
    const nonce = nacl.randomBytes(nacl.box.nonceLength);
    return nonce;
}

module.exports = {encrypt, decrypt, nonce, sign, verify};