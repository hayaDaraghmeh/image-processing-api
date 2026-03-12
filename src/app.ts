import express from 'express';
import imageRoutes from './routes/imageRoutes';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api', imageRoutes);

export default app;
