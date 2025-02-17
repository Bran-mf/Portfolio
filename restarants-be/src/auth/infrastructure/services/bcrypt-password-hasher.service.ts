import { IPasswordHasher } from 'src/auth/domain/service/password-hasher.interface';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptPasswordHasherService implements IPasswordHasher {
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
  async hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then((salt) => bcrypt.hash(password, salt));
  }
}
