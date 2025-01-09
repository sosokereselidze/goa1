// const url = require("url");

// const URL_TO_PARSE = ("https://www.facebook.com/messages");

// const myUrl = new url.URL(URL_TO_PARSE);

// console.log(myUrl.toString());







const url = require('url');

const myUrl = new URL('https://www.facebook.com/messages');
console.log('URL:', myUrl);
console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);


myUrl.protocol = 'https:';
myUrl.hostname = 'facebook.com';
myUrl.port = '5000';


const newUrlString = myUrl.toString();
console.log('Full URL: ', newUrlString);
