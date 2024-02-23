# webpack-dist-replace-plugin
replace your webpack dist content.

## Install
```bash
npm install wmlgl-webpack-dist-replace-plugin --save-dev
```

## Usage
```js
const DistReplacePlugin = require('wmlgl-webpack-dist-replace-plugin');

module.exports = {
    
    plugins: [
        new DistReplacePlugin({
			test: /[.]js$/,
            replace: content => content.replace('hello','world')
        })
    ],

    ......
}

```