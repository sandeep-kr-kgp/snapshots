import fs from 'fs';
import { nanoid } from 'nanoid';
export function AddImagesToPost(filenames, group) {
  const posts = '../frontend/src/data/posts.json';
  fs.readFile(posts, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };

    if (group) {
      data = Object.assign(
        {
          [nanoid()]: {
            title: '',
            description: '',
            location: '',
            images: filenames,
          },
        },
        data
      );
    } else {
      filenames.forEach((f) => {
        data = Object.assign(
          {
            [nanoid()]: {
              title: '',
              description: '',
              location: '',
              images: [f],
            },
          },
          data
        );
      });
    }
    fs.writeFileSync(posts, JSON.stringify(data, null, 4));
  });
}

export function AddImagesToExisting(filenames, postId) {
  const posts = '../frontend/src/data/posts.json';
  fs.readFile(posts, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };
    data[postId] = {
      ...data[postId],
      images: data[postId].images.concat(filenames),
    };
    fs.writeFileSync(posts, JSON.stringify(data, null, 4));
  });
}
