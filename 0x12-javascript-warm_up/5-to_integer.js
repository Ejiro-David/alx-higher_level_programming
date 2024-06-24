#!/usr/bin/node
if (typeof Number(process.argv[2]) !== 'number') {
	console.log('Not a number');
} else {
	console.log('My number: ' + Number(process.argv[2]));
}
