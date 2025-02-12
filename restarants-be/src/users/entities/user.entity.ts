import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Restaurant } from './restaurants.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column((type) => Restaurant)
  restaurants: Restaurant[];
}
