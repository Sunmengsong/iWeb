//vue.config.js
//说明文档:  https://cli.vuejs.org/config
module.exports = {
	//baseUrl: '/',           //目前被publicPath取代
	publicPath: '/',          //影响index.html的变量BASE_URL
	outputDir: 'dir',        
	pages: {
	    index: {
	      // entry for the page
	      entry: 'src/main.js',
	      // the source template
	      template: 'public/index.html',
	      // output as dist/index.html
	      filename: 'index.html',
	      // when using title option,
	      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
	      title: 'iweb在线课堂',
			}
	}
}