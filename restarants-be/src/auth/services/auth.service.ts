import {
  Injectable,
  UnauthorizedException,

} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && user.password !== pass) {
      throw new UnauthorizedException('Please check your login credentials');
    }
    const { password, ...result } = user;
    const payload = { email: result.email, _id: result._id, roles: 'Admin' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
