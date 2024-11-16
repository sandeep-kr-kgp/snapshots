import fs from 'fs';
import { nanoid } from 'nanoid';
export function AddImagesToPost(filenames, parent) {
  const posts = '../frontend/src/data/posts.json';
  fs.readFile(posts, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };
    if (parent) data[parent].images.concat(filenames);
    else {
      filenames.forEach((f) => {
        data[nanoid()] = {
          title: '',
          description: '',
          location: '',
          images: [f],
        };
      });
    }
    fs.writeFileSync(posts, JSON.stringify(data, null, 4));
  });
}
