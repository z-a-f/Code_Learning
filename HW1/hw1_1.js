#!/usr/bin/env node

var fs = require ('fs');
var outfile = "hw1_1.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
