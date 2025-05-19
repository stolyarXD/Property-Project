import { DataSource } from 'typeorm';
import { Property } from './entity/Property';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3305,
  username: 'root',
  password: '0962183511q',
  database: 'property-project',
  entities: [Property],
  synchronize: true, 
});
