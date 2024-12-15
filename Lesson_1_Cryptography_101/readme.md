# Lesson 1: Cryptography 101
If you are following along offline, check out the slides [here](https://docs.google.com/presentation/d/19xTJLwixjGnZM6NWDvdmAwhHUxCfE6p9hs40srcYKY8/edit#slide=id.g31f6a41322a_0_0).

In this lesson, the workshop has three parts.

### Part I: Test Cryptography Fundamentals
Open crypto-101.js and inspect the codebase to see how it uses cryptographic primitives. 

Before you can run the sample code, you'll need to install dependancies.

```sh
yarn #installs system dependancies 
```
If this step fails, be sure to check the installation instructions in the master readme at the root of this repo.

#### Sign and Verify 
One of the critical components of web3 is the ability to verify someone's identity by signing and verifying transactions. Cryptography is critical to this process, since online, and especially in the age of AI, we cannot truly know if the other person is who they say they are. 

Only the holder of a private key can sign a payload truthfully, which anyone else can then verify using their public key. This is at the heart of all modern digital security, especially blockchains and cryptocurrencies.

Once the yarn install completes, you can try running the sample code to check the signature and verification process: 
```sh 
yarn sign-and-verify
``` 

Now, open the file `sign-and-verify.js` so you can see how it works.

#### Encrypt and Decrypt
Another feature of cryptographic keys is the ability to encrypt and decrypt a message, which allows you to hide information from a third party. 

In this example, you'll notice there are two keys, one as a sender, and the other as a receiver. The sender encrypts the message to the receiver's public key, and then the receiver is able to decrypt it using their private key, which no one else has access. 

To run this script, you can type: 
```sh
yarn encrypt-and-decrypt
```

Now, open the file `encrypt-and-decrypt.js` so you can see how it works.

#### Key Takeaways
As you've now seen, it's very important that you keep your keys secure, otherwise someone can impersonate you online, or even drain all of your cryptocurrency from your wallets. 

### Part II: Install the Node
Install the Koii Node, which also doubles as a Key Management Device, visit [the Koii Website](https://koii.network/node).

To get free $KOII, you'll need to visit the Koii Faucet during the installation process. Faucets are websites that distribute tokens for testing purposes, and for onboarding new users. You'll need to authenticate with Gmail or another method. 

Make sure you get at least 10 $KOII, or ask one of the Koii Global Reps for more tokens if it doesn't work.

If you are participating online, you can always ask for tokens for development by joining the [Koii discord channel](https://discord.gg/koii-network).

### Part III: Find your Key File
Once you have the node, you can navigate to the settings tab to get access to your Key File.

It should be located at <OS-specific path>/KOII-Desktop-Node/wallets/<name>_mainSystemWallet.json.

The OS-specific paths are as follows:

Windows: /Users/<username>/AppData/Roaming

Mac: /Users/<username>/Library/Application Support

Linux: /home/<username>/.config (This path contains a dot folder that may be hidden by default. You can show hidden folders by pressing Ctrl-H)

On unix, the wallet is located at home/< your username >/.config/KOII-Desktop-Node/wallets/Laura_mainSystemWallet.json

Note: One 'hacky' way to find the correct path is to open your Koii Node GUI and click any task to 'open logs' which will help you find the node folder.

### Part IV: Create a Token
Visit the 