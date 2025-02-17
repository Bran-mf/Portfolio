import { User } from "../entities/user.entity";

export interface IUserRepository  {
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;

}