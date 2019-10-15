//index.js
const request = require('request');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const analyze = require('./analyze');

//请求图片地址
function start() {
    request(config.url, function(err, res, body) {
        console.log('start');
        if(!err && res) {
            console.log('start');
            analyze.findImg(body,downLoad);
        }
    })
}

//图片文件保存
function downLoad(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
        'encoding': 'utf8'
    }))
    console.log(i)
}

start();