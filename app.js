var express = require('express');
var bodyParser = require('body-parser');
var virtualLib = require('./virtuallib');
var app = express();
app.use(express.static('public'));
app.get('/api/search/:text', function (req, res, next) {
    var text = req.params.text;
    res.send(virtualLib.getVirtualPage(text));
});
app.use('*', function (req, res, next) {
    res.redirect('/');
});
app.listen('4444', function () {
    console.log('start listening');
});


// var bigInt = require("big-integer");

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });



// let alphabet = [
//     'ა',
//     'ბ',
//     'გ',
//     'დ',
//     'ე',
//     'ვ',
//     'ზ',
//     'თ',
//     'ი',
//     'კ',
//     'ლ',
//     'მ',
//     'ნ',
//     'ო',
//     'პ',
//     'ჟ',
//     'რ',
//     'ს',
//     'ტ',
//     'უ',
//     'ფ',
//     'ქ',
//     'ღ',
//     'ყ',
//     'შ',
//     'ჩ',
//     'ც',
//     'ძ',
//     'წ',
//     'ჭ',
//     'ხ',
//     'ჯ',
//     'ჰ',
//     ' '
// ];


// rl.on('line', function (line) {
//     //console.log(line);
//     console.log(virtualPage(line));

// });

// function virtualPage(line) {
//     let result = '';
//     let bigstr = wordToNumber(line);
//     let current=bigInt(bigstr);
//     let p = bigInt(50).pow(10);
//     let min = bigInt(bigstr).divide(p);
//     let max = bigInt(bigstr).multiply(p);

//     while (min.compareTo(current) != 1) {
//         let res = getWord(min.toString());
//         result += res;
//         min = min.multiply(5);
//     }
//     result += getWord(current.toString());

//     while (min.compareTo(max) != 1) {
//         let res = getWord(min.toString());
//         result += res;
//         min = min.multiply(5);
//     }

//     return result;
// }



// function wordToNumber(text) {
//     let p = alphabet.length + 1;
//     let resultNumber = bigInt(0);

//     for (var index = 0; index < text.length; index++) {
//         var element = text[index];
//         let alphabetIndex = alphabet.indexOf(element) + 1;
//         let pow_r = bigInt(p).pow(index);// pow(p.toString(), index);
//         let m = bigInt(alphabetIndex).multiply(pow_r); //  mul(alphabetIndex.toString(), pow_r);
//         resultNumber = resultNumber.plus(m);// resultNumber.multiply(alphabetIndex)  plus(resultNumber, m); // alphabetIndex * (p ** index);

//     }
//     return resultNumber.toString();

// }


// function getWord(x) {

//     let p = alphabet.length + 1;
//     let pbase = bigInt(x).toString(p);
//     //console.log(pbase);
//     let result = '';
//     for (var index = 0; index < pbase.length; index++) {
//         let item = parseInt(pbase[index], p);
//         if (item === 0) continue;
//         result = alphabet[item - 1] + result;

//     }

//     return result;
// }
