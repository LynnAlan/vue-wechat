require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var fs = require('fs')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    let cssWhiteList = ["bootstrap.min.css"]
    fs.readdir(config.build.assetsRoot+"/static/css", function(err, files) {
      files.forEach(function(filename) {
        if(cssWhiteList.indexOf(filename) != -1){
          return;
        }
        console.log(filename);
        if(/^.*css$/.test(filename)){
          fs.readFile(config.build.assetsRoot+"/static/css/"+filename,'utf-8',function(err,data){
            if(err) return
            data = data.replace(/url\(static/g,"url(../../static");
            fs.writeFile(config.build.assetsRoot+"/static/css/"+filename, data, (err) => {
              if (err) throw err;
              console.log('It\'s saved!');
            });
          });
        }
      });
    });
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
