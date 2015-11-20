var LabEnv = require("./LabEnv");
var LabAgent = require("./LabAgent");

var x, y, h, w;
console.log("\n ingrese altura del laberinto: ");
console.log("\n ingrese ancho del laberinto: ");

var str=LabEnv.maze(h,w);
console.log(str);
