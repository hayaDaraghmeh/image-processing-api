import express from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import resizeImage from '../utilities/imageProcessing';
const router = express.Router();

router.get('/images', async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const inputPath = path.join('assets/full', `${filename}.jpg`);
  const outputPath = path.join(
    'assets/thumb',
    `${filename}_${width}_${height}.jpg`,
  );

  if (!filename || !width || !height) {
    return res.status(400).send('Missing parameters');
  }
  if (isNaN(width) || isNaN(height)) {
    return res.status(400).send('Width and height must be numbers');
  }
  if (!fs.existsSync(inputPath)) {
    return res.status(404).send('Image not found');
  }

  try {
    if (!fs.existsSync(outputPath)) {
      await resizeImage(inputPath, outputPath, width, height);
    }

    res.sendFile(path.resolve(outputPath));
  } catch (error) {
    res.status(500).send('Error processing image');
  }
});

export default router;
