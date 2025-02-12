import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Restaurant } from '../entities/restaurants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Restaurant])],
  exports: [TypeOrmModule],
})
export class InfrastructureModule {}
