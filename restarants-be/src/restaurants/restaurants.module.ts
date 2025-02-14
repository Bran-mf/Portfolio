import { Module } from '@nestjs/common';
import { RestaurantsService } from './services/restaurants.service';
import { RestaurantsController } from './api/restaurants.controller';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [InfrastructureModule],
})
export class RestaurantsModule {}
