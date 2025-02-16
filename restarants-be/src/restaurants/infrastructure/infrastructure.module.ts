import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../domain/entities/restaurant.entity';
import { RestaurantsRepository } from './restaurants.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    controllers: [],
    providers: [RestaurantsRepository],
    exports: [TypeOrmModule,RestaurantsRepository],
})
export class InfrastructureModule {}
