import fsPromise from 'fs/promises';

const files = await fsPromise.readdir('./schemas');
const result = files.map(fName => {
    const splitedName = fName.split('.');
    return {
        jsonFileName: fName,
        tsFileName: splitedName[0] + '.d.ts',
        inputFolderName: './schemas/',
        outputFolderName: './output/'
    }
});

export default result;