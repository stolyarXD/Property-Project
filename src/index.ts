import express from 'express';
import 'reflect-metadata';
import cors from 'cors'; 
import { AppDataSource } from './data-source';
import PropertyRoutes from './routes/PropertyRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: 'GET,POST,PUT,DELETE',  
  allowedHeaders: 'Content-Type,Authorization',  
}));

app.use(express.json());


AppDataSource.initialize()
  .then(() => {

    app.use('/properties', PropertyRoutes);

    app.listen(8080, () => {
      console.log('Server running at http://localhost:8080');
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err);
  });
