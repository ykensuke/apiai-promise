# Node.js SDK for Api.ai with Promise

This package helps you use [Node.js SDK for Api.ai](https://www.npmjs.com/package/apiai) with Promise. You can write more elegant code if you use this with async/await.

# Installation

* Install [Node.js](https://nodejs.org/)
* Install apiai-promise with `npm`:

```shell
npm install apiai-promise
```

# Usage
* Create `main.js` file with the following code:

```javascript
var apiai = require('apiai-promise');

var app = apiai("<your client access token>");

app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
}).then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
})

```

**Elegant code with ES2017 async/await**

```javascript
const response = await app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
})

```

* Run following command.

```shell
node main.js
```
