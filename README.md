

The library has been developed with the goal of streamlining the authorization and verification process, providing a smooth and hassle-free experience for the end user. This library should be integrated into a website that aims to benefit from the seamless authorization and verification flow offered by WallID.

## Install and test lib

```
npm install
```

```
npm test
```

## Add to your code

To begin utilizing the library, you must first open your dashboard to retrieve your Client ID and Client Secret. Then, you must perform authentication to obtain a valid token. Once you have a valid token, you can use the Configuration ID to activate the verification workflow.

### login

```
const sdkConfig = require('./index.js')
let authToken = sdkConfig.login('<clientId>', '<clientSecret>')

```

### Get configuration

```
const sdkConfig = require('./index.js')

let authToken = sdkConfig.getConfigURl('<authToken>', '<configId>')

```
