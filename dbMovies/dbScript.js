const hash = JSON.stringify(moviesIdHash);

const title = $('title').text().split('(豆瓣)')[0].trim();

let reg1 = new RegExp(title);
let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + title + '.*?"');
if (reg1.test(hash)) {
    let id = hash.match(reg2)[1];
    console.log('find:' + id + title + '\r');
    let div = document.createElement('div');
    div.style = 'float:left;margin-right:5px;padding:0 5px;border-radius:5px;border:1px solid #429C1D';
    let a = document.createElement('a');
    a.style = 'color:#258DCD;background-image:url('')';
    a.href = 'http://www.80s.tw/movie/'+id;
    a.target = '_blank';
    div.appendChild(a);
    $('#content h1').append(div);
}else{
	console.log(reg2);
	console.log(reg1);
	console.log('no found:'+title);
}

const img = $('.poster img');
for (let i = 0; i < img.length; i++) {
    let index = img.eq(i);
    let attr = index.attr('alt');
    let reg1 = new RegExp(attr);
    let reg2 = new RegExp('"(\\d{1,5})":"[^"]*?' + attr + '.*?"');
    if (reg1.test(hash)) {
        let id = hash.match(reg2)[1];
        console.log('find:' + id + attr + '\r');
        let button = document.createElement('button');
        button.innerText = 'Download';
        button.style = 'position:relative;z-index:999999;background-color:red'
        index.parent().append(button);
    } else {
        console.log('no found:' + attr + '\r');
    }
}
