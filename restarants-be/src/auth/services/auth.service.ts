import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { LoginCredentialsCheckSpecification } from '../domain/specifications/login-credentials-check.specificastion';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string) {
    const user = await this.userRepository.findByEmail(email);

    const hasValidCredentials = new LoginCredentialsCheckSpecification(user).isSatisfiedBy(email, pass);
    if(!hasValidCredentials) {
      throw new UnauthorizedException('Invalid credentials');
    }   
    const { password, ...result } = user;
    const payload = {...result, roles: 'Admin' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
