import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
}
