const hash = JSON.stringify(moviesIdHash);

const title = $('title').text().split('(豆瓣)')[0].trim();

let reg1 = new RegExp(title);
let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + title + '.*?"');
if (reg1.test(hash)) {
    let id = hash.match(reg2)[1];
    console.log('find:' + id + title + '\r');
    let a = document.createElement('a');
    a.style = 'color:#258DCD;';
    a.href = 'http://www.80s.tw/movie/'+id;
    a.target = '_blank';
    a.innerHTML = '<img style="width:20px;height:20px" src="https://raw.githubusercontent.com/shudery/douban-movies-plugin/master/dbMovies/images/download.png" alt="download">';
    $('#content h1').css('float','left').append(a);
}else{
	console.log('no found:'+title);
}

// const img = $('.poster img');
// for (let i = 0; i < img.length; i++) {
//     let index = img.eq(i);
//     let attr = index.attr('alt');
//     let reg1 = new RegExp(attr);
//     let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + attr + '.*?"');
//     if (reg1.test(hash)) {
//         let id = hash.match(reg2)[1];
//         console.log('find:' + id + attr + '\r');
//         let button = document.createElement('button');
//         button.innerText = 'Download';
//         button.style = 'position:relative;z-index:999999;background-color:red'
//         index.parent().append(button);
//     } else {
//         console.log('no found:' + attr + '\r');
//     }
// }
