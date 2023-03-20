const fs = require('fs');

const fileName = 'src/buildConfig.js';

const BUILD_DATE_PLACEHOLDER = '<BUILD_DATE>';
const BASE_URL_PLACEHOLDER = '<BASE_URL>';

const fileRead = fs.readFileSync('jsBuilders/template.buildConfig.js', {
  encoding: 'utf8',
  flag: 'r',
});

let configContents = fileRead;
console.log('--- #1 BASE CONFIG: ', configContents);

configContents = configContents.replace(BUILD_DATE_PLACEHOLDER, new Date().getTime());
console.log(`--- #2 REPLACING ${BUILD_DATE_PLACEHOLDER}: `, configContents);

configContents = configContents.replace(BASE_URL_PLACEHOLDER, 'http://192.168.100.2:3000');
console.log(`--- #3 REPLACING ${BASE_URL_PLACEHOLDER}: `, configContents);

fs.writeFileSync(fileName, configContents, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
