import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Restaurant } from './restaurants.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @Column()
  email: string;
  @Column((type) => Restaurant)
  restaurants: Restaurant[];

  setData(email: string) {
    this.email = email;
  }
  
  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }
}
