import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRestaurantRepository } from '../domain/repositories/restaurant.repository.interface';
import { Restaurant } from '../domain/entities/restaurant.entity';
import { BaseRepository } from 'src/seedWork/base.repository.interface';

@Injectable()
export class RestaurantsRepository
  extends BaseRepository<Restaurant>
  implements IRestaurantRepository
{
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {
    super();
  }

  findByOwnerId(ownerId: string): Promise<Restaurant[]> {
    return this.restaurantRepository.find({ where: { owner_id: ownerId } });
  }

  async create(restaurant: Restaurant) {
    return await this.restaurantRepository.save(restaurant);
  }
}
