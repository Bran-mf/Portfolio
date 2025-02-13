import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/users/entities/restaurants.entity';
import { User } from 'src/users/entities/user.entity';
import {User as Auth_User} from 'src/auth/entities/user.entity';

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
          entities: [User, Restaurant,User,Auth_User],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class InfrastructureModule {}
