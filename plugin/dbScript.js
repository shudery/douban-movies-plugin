const hash = JSON.stringify(moviesIdHash);

const title = $('title').text().split('(豆瓣)')[0].trim();

let reg1 = new RegExp(title);
let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + title + '.*?"');
if (reg1.test(hash)) {
    let id = hash.match(reg2)[1];
    console.log('find:' + id + title + '\r');
    let a = document.createElement('a');
    a.style = 'color:#258DCD;';
    a.href = 'http://www.80s.tw/movie/' + id + '/#minfo';
    a.target = '_blank';
    a.innerHTML = '<img title="download" style="width:20px;height:20px" src="https://raw.githubusercontent.com/shudery/douban-movies-plugin/master/plugin/images/download.png" alt="download">';
    $('#content h1').append(a);
} else {
    console.log('no found:' + title);
}
//首页下载按钮。
// const img = $('.title');
// if (img) {
//     for (let i = 0; i < img.length; i++) {
//         let title = img.eq(i).children('a').text().split('...')[0];
//         let reg1 = new RegExp(title);
//         let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + title + '.*?"');
//         console.log(title);
//         if (reg1.test(hash)) {
//             let id = hash.match(reg2)[1];
//             console.log('find:' + id + title + '\r');
//             let a = document.createElement('a');
//             a.style = 'color:#258DCD;';
//             a.href = 'http://www.80s.tw/movie/' + id;
//             a.target = '_blank';
//             a.innerHTML = '<img title="download" style="width:15px;height:15px" src="https://raw.githubusercontent.com/shudery/douban-movies-plugin/master/dbMovies/images/download.png" alt="download">';
//             img.eq(i).append(a);
//         } else {
//             console.log('no found:' + title);
//         }
//     }
// };