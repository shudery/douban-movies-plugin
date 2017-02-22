const superagent = require('superagent');
const async = require('async');
const fs = require('fs');

// const cheerio = require('cheerio');
// const colors = require('colors');

let moviesList = {};
let tasks = [];
let url = 'http://www.80s.tw/movie/';
for (let i = 0; i < 10; i++) {
    tasks.push(i);
}

async.mapLimit(tasks, 1000, (task, cb) =>
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
    superagent.get(url + i)
        // .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
        .end((err, res) => {
            
            err && console.log("error:" + i);
            if (res && /<h1 class="font14w">(.*?)<\/h1>/.test(res.text)) {
                let title = res.text.match('<h1 class="font14w">(.*?)<\/h1>')[1];
                moviesList[i] = title;
                console.log("get:" + i + "-" + title);
            } else {
                console.log("no match:" + i);
            }
            cb(null);


        })
};
