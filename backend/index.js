import express from 'express';
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import crud from './crud.js';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory
const upload = multer({ dest: './images' });

const runWorker = (filename, parent) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(join(__dirname, 'converter.js'), {
      workerData: { filename, parent },
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};

// Route to handle file uploads
app.post(
  '/backend/upload/:parent',
  upload.array('images', 10),
  async (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
    const conversionPromises = req.files.map((file) => {
      return runWorker(file.filename, req.params.parent);
    });
    try {
      await Promise.all(conversionPromises); // Wait for all conversions to complete
      res.send('All files uploaded and converted successfully!');
    } catch {
      res.status(500).send('Error converting files to WebP.');
    }
  }
);
app.use('/backend/image', crud);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
