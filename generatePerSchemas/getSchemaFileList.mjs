import fsPromise from 'fs/promises';

const files = await fsPromise.readdir('./schemas');
const result = files.map(fName => {
    const splitedName = fName.split('.');
    return {
        jsonFileName: fName,
        entityName: splitedName[0],
        tsFileName: splitedName[0] + '.ts',
        inputFolderName: './schemas/',
        outputFolderName: './types/'
    }
});

export default result;