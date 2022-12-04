import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';

const fileCopyStream = (source: string, destination: string) => {
  const sourceStream = createReadStream(source);
  const destinationStream = createWriteStream(destination);

  sourceStream.on('data', writingDataBackpressure);
  sourceStream.on('error', errorHandler)
  sourceStream.on('end', destinationStream.end.bind(destinationStream));

  destinationStream.on('drain',  sourceStream.resume.bind(sourceStream));
  destinationStream.on('error', errorHandler);
  destinationStream.on('close', () => console.log('Stream has been closed'));

  function errorHandler(err: any) {
    console.log(`Error: ${err}`);
    process.exit();
  }

  function writingDataBackpressure(data: Buffer | string) {
    const hasMemoryToRead = destinationStream.write(data);
    if (!hasMemoryToRead) {
      sourceStream.pause();
    }
  }
}

const fileName = '31189.jpg';
const sourcePath = resolve(`./test_data/${fileName}`);
const destinationPath = resolve(`./temp/${new Date().getTime()}-${fileName}`);

fileCopyStream(sourcePath, destinationPath);