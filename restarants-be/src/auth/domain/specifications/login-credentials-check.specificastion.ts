import { User } from '../entities/user.entity';
export class LoginCredentialsCheckSpecification {
    constructor(private user: User) {
    }
    isSatisfiedBy(email:string, pass:string) {
        if(!this.user) {
            return false;
        }
        return this.user.email === email && this.user.password === pass;
    }
}
