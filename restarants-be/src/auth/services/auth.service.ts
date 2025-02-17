import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { LoginCredentialsCheckSpecification } from '../domain/specifications/login-credentials-check.specificastion';
import { SignUpDto } from '../dto/sign-up.dto';
import { IPasswordHasher } from '../domain/service/password-hasher.interface';
import { BcryptPasswordHasherService } from '../infrastructure/services/bcrypt-password-hasher.service';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private passwordHasher: BcryptPasswordHasherService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string) {
    const user = await this.userRepository.findByEmail(email);

    const hasValidCredentials = new LoginCredentialsCheckSpecification(
      user,
      this.passwordHasher,
    ).isSatisfiedBy(email, pass);

    if (!hasValidCredentials) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password, ...result } = user;
    const payload = { ...result, roles: 'Admin' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  
  async signUp(signUpDto: SignUpDto) {
    const user = new User();
    await user.setData(
      signUpDto.email,
      signUpDto.password,
      this.passwordHasher,
    );
    return this.userRepository.create(user);
  }
}
