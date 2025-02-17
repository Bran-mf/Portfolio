import { User } from '../entities/user.entity';
import { IPasswordHasher } from '../service/password-hasher.interface';
export class LoginCredentialsCheckSpecification {
    constructor(private user: User,private passwordHasher:IPasswordHasher) {
    }
    isSatisfiedBy(email:string, pass:string) {
        if(!this.user) {
            return false;
        }
        return this.user.email === email && this.passwordHasher.comparePassword(pass,this.user.password);
    }
}
