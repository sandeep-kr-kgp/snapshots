import sharp from 'sharp';
import fs from 'fs';
import { parentPort, workerData } from 'worker_threads';
sharp.cache(false);

function AddImageToGroup(filename, parent) {
  const images = '../frontend/src/data/images.json';
  const groups = '../frontend/src/data/groups.json';
  // Add entry to images.json
  fs.readFile(images, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };
    data[filename] = {
      parent,
      file: `${filename}.webp`,
      date: new Date().toLocaleString(),
    };
    fs.writeFileSync(images, JSON.stringify(data, null, 4));
  });
  // Add entry to groups.json
  fs.readFile(groups, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };
    data[parent].images.push(filename);
    fs.writeFileSync(groups, JSON.stringify(data, null, 4));
  });
}

function Converter(filename, parent) {
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
        AddImageToGroup(filename, parent);
        parentPort.postMessage(`Image converted to WebP: ${filename}`);
      }
    });
}

Converter(workerData.filename, workerData.parent);
