const superagent = require('superagent');
const async = require('async');
const fs = require('fs');

// const cheerio = require('cheerio');
// const colors = require('colors');
let url = 'http://www.80s.tw/movie/';
let moviesList = {};
let tasks = [];
tasks.length = 1;
tasks = tasks.fill().map((_v, i) => i);
let count = 0;

async.mapLimit(tasks, 1, (task, cb) =>
    get(task, cb), (err, result) => {
        err && console.log(err);
        moviesList = JSON.stringify(moviesList)
        console.log(moviesList);
        fs.writeFile('moviesList.json', moviesList, (err) => {
            err && console.log(err);
            console.log('\rall datas write in moviesList.json')
        });
    });

function get(i, cb) {
    console.log('start:' + i);
    superagent.get(url + 19927)
        // .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
        .end((err, res) => {
            console.log(count++);
            console.log(res.text)
            err && console.log("error:" + i + "-" + err);
            if (res && /<h1 class="font14w">(.*?)<\/h1>/.test(res.text)) {
                let title = res.text.match(/<h1 class="font14w">(.*?)<\/h1>/)[1];
                // let link = res.text.match(/<span class="xunlei dlbutton1">[\s\S]*?<\/span>/);
                console.log("link:"+link);
                moviesList[i] = title;
                console.log("get:" + i + "-" + title);
            } else {
                console.log("no match:" + i);
            }
            cb(null);
        });
};
