#!/usr/bin/env node

const { readFile } = require('fs');

readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    console.log(String(data));
});