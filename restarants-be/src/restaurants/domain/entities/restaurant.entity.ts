import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @ObjectIdColumn()
  owner_id: string;
  @Column()
  availability: number;

  constructor(id?: string) {
    this._id = id;
  }
  setData(
    name: string,
    address: string,
    owner_id: string,
    availability: number,
  ) {
    this.name = name;
    this.address = address;
    this.owner_id = owner_id;
    this.availability = availability;
  }
}
