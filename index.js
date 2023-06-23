// const http = require("http");
// const log = require("simple-node-logger").createSimpleLogger("project.log");

// const dataCOntrol = (req, res) => {
//   console.log("connected");
//   res.write("<h1>from arrow function!</h1>");
//   res.end();
// };

// http.createServer(dataCOntrol).listen(4500);
let start = 0;
let end = 20;
let arr = [];
var flag = 0;
for (var i = 2; i <= end; i++) {
  flag = 0;
  for (var j = 2; j < i / 2; j++) {
    if (i % j == 0) {
      flag = 1;
      // console.log("i=" + i + " j=" + j + ` ${i}%${j}=${res}`);
    }
  }
  if (flag == 0) {
    arr.push(i);
  }
}
console.log(arr);
