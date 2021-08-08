const fs = require('fs');
const buffer = require('buffer');

const data = new Uint8Array(Buffer.from('USE TestDB\nSELECT* FROM Inventory;'));
fs.writeFile('index.sql', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
