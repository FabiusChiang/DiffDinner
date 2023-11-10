import { compileFromFile } from 'json-schema-to-typescript'
import filesList from './getSchemaFileList.js';
import fs from 'fs';

console.log(filesList);

filesList.forEach(element => {
    compileFromFile(element.inputFolderName + element.jsonFileName)
        .then(ts => fs.writeFileSync(element.outputFolderName + element.tsFileName, ts));
});