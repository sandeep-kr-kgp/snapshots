import sharp from 'sharp';
import fs from 'fs';
import { parentPort, workerData } from 'worker_threads';
sharp.cache(false);

function Converter(filename) {
  const inputFile = `./images/${filename}`;
  const outputFile = `../frontend/public/images/${filename}.webp`;
  sharp(inputFile)
    .toFormat('webp')
    .toFile(outputFile, (err, info) => {
      if (err) {
        console.error('Error converting image:', err);
        parentPort.postMessage(`Error converting: ${filename}`);
      } else {
        console.log('Image converted successfully:', info);
        fs.unlinkSync(inputFile);
        parentPort.postMessage(`Image converted to WebP: ${filename}`);
      }
    });
}

Converter(workerData.filename, workerData.parent);
