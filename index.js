// webpack-dist-replace-plugin
// @author sky-wang@qq.com

var RawSource = require('webpack-sources/lib/RawSource');

var options;

function ReplacePlugin(config) {
	if (!config || !config.replace) {
		throw new Error('webpack-dist-replace-plugin needs a replace function.');
	}
	options = config;
}

ReplacePlugin.prototype.apply = function (compiler) {
	// compiler.plugin('emit', function(compilation, callback) {
	compiler.hooks.emit.tapAsync('GenerateAssetWebpackPlugin', (compilation, callback) => {
		var assets = compilation.assets;

		for (var path in assets) {
			var content = assets[path].source();
			if (typeof content === 'string') {
				assets[path] = new RawSource(
					options.replace(content)
				);
			}
		}

		callback();
	});
};

module.exports = ReplacePlugin;