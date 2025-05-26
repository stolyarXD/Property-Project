import { PropertyRepository } from '../repository/PropertyRepository';
import { Property } from '../entity/Property';

export class PropertyService {
  private propertyRepo = new PropertyRepository();

  getAll() {
    return this.propertyRepo.findAll();
  }

  getById(id: number) {
    return this.propertyRepo.findOne(id);
  }

  create(property: Partial<Property>) {
    return this.propertyRepo.create(property);
  }

  async update(id: number, property: Partial<Property>) {
    await this.propertyRepo.update(id, property);
    return this.propertyRepo.findOne(id);
  }

  delete(id: number) {
    return this.propertyRepo.delete(id);
  }
}
