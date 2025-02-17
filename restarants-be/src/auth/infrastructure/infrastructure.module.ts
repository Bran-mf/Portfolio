import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { BcryptPasswordHasherService } from './services/bcrypt-password-hasher.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository,BcryptPasswordHasherService],
  exports: [TypeOrmModule,UserRepository,BcryptPasswordHasherService],
})
export class InfrastructureModule {}
