import { readFileSync, writeFile } from 'fs';

var obj = JSON.parse(readFileSync('package.json', 'utf8'));

var versionArray = obj.version.split("-");

obj.version = versionArray[0] + "-SNAPSHOT." + Date.now();

console.log(obj.version);


const data = JSON.stringify(obj, null, 2);

writeFile('package.json', data, (err) => {
	if (err) {
		throw err;
	}
});