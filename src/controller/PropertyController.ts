import { Request, Response } from 'express';
import { PropertyService } from '../service/PropertyService';

const service = new PropertyService();

export class PropertyController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const properties = await service.getAll();
      res.json(properties); 
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const property = await service.getById(+req.params.id);
      if (property) {
        res.json(property); 
      } else {
        res.status(404).send('Not Found');
      }
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    try {
      const newProperty = await service.create(req.body);
      res.status(201).json(newProperty);  
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedProperty = await service.update(+req.params.id, req.body);
      if (!updatedProperty) {
        res.status(404).json({ message: 'Property not found' });
      } else {
        res.status(200).json(updatedProperty);  
      }
    } catch (err) {
      console.error('Error updating property:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      await service.delete(+req.params.id);
      res.sendStatus(204);  
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
