# webpack-dist-replace-plugin
replace your webpack dist content.

## Install
```bash
npm install webpack-dist-replace-plugin --save-dev
```

## Usage
```js
const DistReplacePlugin = require('webpack-dist-replace-plugin');

module.exports = {
    
    plugins: [
        new DistReplacePlugin({
            replace: content => content.replace('hello','world')
        })
    ],

    ......
}

```