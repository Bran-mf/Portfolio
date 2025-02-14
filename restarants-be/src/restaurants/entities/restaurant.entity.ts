import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
@Entity()
export class Restaurant {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column()
    name:string;
    @Column()
    address:string;
    @Column()
    owner_id:ObjectId;
    @Column()
    availability:number;

}
