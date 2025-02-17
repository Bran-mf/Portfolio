import { User } from "../entities/user.entity";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    create(user: User): Promise<User>;
    
}