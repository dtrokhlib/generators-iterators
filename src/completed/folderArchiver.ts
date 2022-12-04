import { createWriteStream } from 'fs';
import { resolve } from 'path';
import archiver from 'archiver';

const folderArchiver = (source: string, destination: string) => {
  const archive = archiver('zip');
  const output = createWriteStream(destination);

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  archive.on('error', function(err){
    throw err;
  });

  archive.pipe(output);
  archive.directory(source, false);
  return archive.finalize();
}

const sourcePath = resolve(`./test_data/`);
const destinationPath = resolve(`./temp/${new Date().getTime()}.zip`);

folderArchiver(sourcePath, destinationPath).then((res) => console.log(res));