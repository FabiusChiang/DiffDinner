import { compileFromFile } from 'json-schema-to-typescript'
import filesList from './getSchemaFileList.mjs';
import fs from 'fs';

console.log(filesList);

let indexTsContent = 'export function func1 (a: number, b: number): number {return a + b;};\n';

function convertEntityName(fileName) {
    const firstLetter = fileName[0].toUpperCase();
    if (fileName.length > 1) {
        return firstLetter + fileName.slice(1, fileName.length);
    }
    else {
        return firstLetter;
    }
}

filesList.forEach(element => {
    indexTsContent = indexTsContent + `export \{ ${convertEntityName(element.entityName)} \} from \'${element.outputFolderName}${element.entityName}';\n`
    compileFromFile(element.inputFolderName + element.jsonFileName)
        .then(ts => fs.writeFileSync(element.outputFolderName + element.tsFileName, ts));
});
fs.writeFileSync('./index.ts', indexTsContent);


