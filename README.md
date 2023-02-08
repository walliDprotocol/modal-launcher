## Install and test lib

```
npm install
```

```
npm test
```

## Add to your code

Open your dashboard to get your clientId and Client Secret.
Perform the authentication to get a valid token, then use the configuration Id to open workflow of the verification

### login

```
const sdkConfig = require('./index.js')

let authToken = sdkConfig.login('<clientId>', '<clientSecret>')

```

### Get configuration

```
const sdkConfig = require('./index.js')

let authToken = sdkConfig.getConfig('<authToken>', '<configId>')

```
