import { Column, Entity, ObjectIdColumn } from "typeorm";
import { IPasswordHasher } from "../service/password-hasher.interface";
@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @Column()
  email: string;
  @Column()
  password: string;


  constructor(id?:string) {
    this._id = id;
  }
  async setData(email: string, password: string,passwordHasher:IPasswordHasher) {
    this.email = email;
    this.password = await passwordHasher.hashPassword(password);
  }
}
