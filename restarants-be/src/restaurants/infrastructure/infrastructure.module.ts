import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../entities/restaurant.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class InfrastructureModule {}
