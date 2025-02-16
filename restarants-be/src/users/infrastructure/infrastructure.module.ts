import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/entities/user.entity';
import { Restaurant } from '../domain/entities/restaurants.entity';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Restaurant])],
  exports: [TypeOrmModule, UserRepository],
  providers: [UserRepository],
})
export class InfrastructureModule {}
