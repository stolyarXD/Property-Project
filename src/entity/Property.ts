import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  title!: string;

  @Column()
  address!: string;

  @Column('decimal')
  price!: number;


  @Column("simple-array")
  photoUrls!: string[]; 

  @Column()
  type!: string;

  @Column()
  numberOfRooms!: number;

  @Column()
  peopleCapacity!: number;

  @Column()
  size!: number; 

  @Column({ nullable: true })
  additionalInfo?: string;
}
