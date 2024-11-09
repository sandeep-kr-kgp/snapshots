import { Router } from 'express';
import fs from 'fs';
import sharp from 'sharp';
sharp.cache(false);
const router = Router();

function UpdateHelper(cb) {
  const images = '../frontend/src/data/images.json';
  fs.readFile(images, 'utf8', function readFileCallback(err, text) {
    let data = { ...JSON.parse(text) };
    const newData = cb(data);
    fs.writeFileSync(images, JSON.stringify(newData, null, 4));
  });
}

router.get('/rotate/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send('Id is required');
    return;
  }
  let target = `../frontend/public/images/${id}.webp`;
  sharp(target)
    .rotate(90)
    .toBuffer(function (err, buffer) {
      fs.writeFile(target, buffer, function () {
        console.log('Rotated');
      });
    });

  res.json({ success: true });
});

router.post('/update', async (req, res) => {
  const { id, title, description } = req.body;
  if (!id) {
    res.status(400).send('Id is required');
    return;
  }
  try {
    UpdateHelper((data) => {
      data[id] = { ...data[id], title, description };
      return data;
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error fetching view config', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Id is required');
    return;
  }
  try {
    fs.unlinkSync(`../frontend/public/images/${id}.webp`);
    UpdateHelper((data) => {
      delete data[id];
      return data;
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error fetching view config', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
export default router;
