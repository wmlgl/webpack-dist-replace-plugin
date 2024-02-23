// webpack-dist-replace-plugin
// @author sky-wang@qq.com

var options;

function ReplacePlugin(config) {
  if (!config || !config.replace) {
    throw new Error('webpack-dist-replace-plugin needs a replace function.');
  }
  options = config;
}

// 使用compilation.hooks.processAsset会卡死，但是用compiler.hooks.emit会提示弃用
ReplacePlugin.prototype.apply = function (compiler) {
  let sources = compiler.webpack.sources;
  // compiler.plugin('emit', function (compilation, callback) {
  // compiler.hooks.thisCompilation.tap('ReplacePlugin', (compilation) => {
  //   compilation.hooks.processAssets.tap({
  //     name: 'ReplacePlugin',
  //     stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
  //     additionalAssets: true
  //   }, (assets) => {
  //     for (var path in assets) {
  //       if (options.test && !options.test.test(path)) {
  //         continue;
  //       }
  //       console.log("\n" + path + "\n")
  //       // var content = assets[path].source();
  //       // if (typeof content === 'string') {
  //       // compilation.updateAsset(path, new RawSource(
  //       //   options.replace(content)
  //       // ));
  //       // assets[path] = new RawSource(
  //       //   options.replace(content)
  //       // )
  //       // }

  //       compilation.updateAsset(path, (assert) => {
  //         let content = assert.source()
  //         if (typeof content === "string") {
  //           // content = options.replace(content);
  //           console.log("\n" + path + " rep\n")
  //           return new sources.RawSource(content)
  //           // return {
  //           //   source: () => content,
  //           //   size: () => cotnent.length
  //           // }
  //           // assert._source._children.forEach((content, i) => {
  //           //   if (typeof content === "string") {
  //           //     assert._source._children[i] = options.replace(content)
  //           //   }
  //           // });
  //         }
  //         return assert
  //       });
  //       console.log("\n" + path + " end\n")
  //       // assets[path]._source._children.forEach((content, i) => {
  //       //   if (typeof content === "string") {
  //       //     assets[path]._source._children[i] = options.replace(content)
  //       //   }
  //       // });

  //     }
  //     console.log("\nReplacePlugin end\n")
  //   });
  // })
  compiler.hooks.emit.tap('ReplacePlugin', (compilation) => {
    assets = compilation.assets;
    for (var path in assets) {
      if (options.test && !options.test.test(path)) {
        continue;
      }
    //   console.log("\n" + path + "\n")
      let content = assets[path].source()
      if (typeof content === "string") {
        content = options.replace(content);
        // assert[path] = new sources.RawSource(content)
        compilation.updateAsset(path, new sources.RawSource(content));

        // console.log("\n" + path + " rep\n")
      }
    }
  })
};

module.exports = ReplacePlugin;