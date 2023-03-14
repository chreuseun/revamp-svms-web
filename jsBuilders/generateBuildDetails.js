const fs = require('fs');

const fileName = 'src/buildConfig.js';

const BUILD_DATE_PLACEHOLDER = '<BUILD_DATE>';

const fileRead = fs.readFileSync('jsBuilders/template.buildConfig.js', {
  encoding: 'utf8',
  flag: 'r',
});

const configContents = fileRead.replace(BUILD_DATE_PLACEHOLDER, new Date().getTime());

console.log('---', configContents);

fs.writeFileSync(fileName, configContents, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
