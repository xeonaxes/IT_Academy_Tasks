const fse = require('fs-extra');


fse.mkdirSync('folder_1');


fse.writeFileSync('folder_1/file.txt', 'Hello');


fse.mkdirSync('folder_2');


fse.moveSync('folder_1/file.txt', 'folder_2/file.txt')


fse.mkdirSync('folder_3');


fse.copySync('folder_2/file.txt', 'folder_3/file.txt')


fse.removeSync('folder_2/file.txt'); 


fse.removeSync('folder_3/file.txt');


fse.removeSync('folder_1'); 
fse.removeSync('folder_2');
fse.removeSync('folder_3');