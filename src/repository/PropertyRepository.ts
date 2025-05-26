import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Property } from '../entity/Property';

export class PropertyRepository {
  private repo: Repository<Property>;

  constructor() {
    this.repo = AppDataSource.getRepository(Property);
  }

  findAll() {
    return this.repo.find();
  }
  

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(property: Partial<Property>) {
    const newProperty = this.repo.create(property);
    return this.repo.save(newProperty);
  }

  update(id: number, data: Partial<Property>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

