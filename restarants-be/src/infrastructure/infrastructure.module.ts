import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/users/domain/entities/restaurants.entity';
import { User } from 'src/users/domain/entities/user.entity';
import {User as Auth_User} from 'src/auth/domain/entities/user.entity';
import {Restaurant as Restaurants_Restaurant} from 'src/restaurants/domain/entities/restaurant.entity';

@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory(configService: ConfigService) {
        return {
          type: 'mongodb',
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          username: configService.get('database.user'),
          password: configService.get('database.password'),
          database: configService.get('database.database'),
          synchronize: configService.get('database.synchronize'),
          entities: [User, Restaurant,Auth_User,Restaurants_Restaurant],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class InfrastructureModule {}
