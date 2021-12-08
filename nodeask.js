var address = "http://www.gangulytech.in/courses/show.html?id=12&cat=nodejs";

var url = require('url');

var data = url.parse(address, true);

console.log("HOSTNAME: " + data.host);
console.log("PATHNAME: " + data.pathname);
console.log("SEARCH: " + data.search);

var temp = data.query;
console.log("DATA: " + JSON.stringify(temp));
console.log("ID: " + temp.id);
console.log("CATEGORY: " + temp.cat);