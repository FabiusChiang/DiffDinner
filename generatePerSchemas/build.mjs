import { compileFromFile } from 'json-schema-to-typescript'
import filesList from './getSchemaFileList.mjs';
import fs from 'fs';

console.log(filesList);

let indexTsContent = 'export function func1 (a: number, b: number): number {return a + b;};\n';

filesList.forEach(element => {
    indexTsContent = indexTsContent + `export * from \'${element.outputFolderName}${element.entityName}';\n`
    compileFromFile(element.inputFolderName + element.jsonFileName)
        .then(ts => fs.writeFileSync(element.outputFolderName + element.tsFileName, ts));
});
fs.writeFileSync('./index.ts', indexTsContent);


