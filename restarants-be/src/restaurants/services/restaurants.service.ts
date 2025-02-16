import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from '../domain/entities/restaurant.entity';
import { ObjectId, Repository } from 'typeorm';
import { RestaurantsByOwnerSpecification } from '../domain/Specifications/restaurants-by-owner.specification';
import { RestaurantsRepository } from '../infrastructure/restaurants.repository';

@Injectable()
export class RestaurantsService {
  constructor(
    private restaurantRepository : RestaurantsRepository,
  ) {}
  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = new Restaurant();
    const {address,availability,name,owner_id} = createRestaurantDto;
    restaurant.setData(name,address,owner_id,availability);
    const created = await this.restaurantRepository.create(restaurant);
    return created;
  }

  findAll() {
    return `This action returns all restaurants`;
  }
  FindByOwner(owner_id: string) {
    return  this.restaurantRepository.selectSatisfying(new RestaurantsByOwnerSpecification(owner_id));
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  async update(owner_id: string, updateRestaurantDto: UpdateRestaurantDto) {
    // const RestaurantToUpdate = await this.restaurantRepository.findOneBy({
    //   _id: updateRestaurantDto._id,
    // });
    // if (RestaurantToUpdate.owner_id !==  owner_id) {
    //   throw new UnauthorizedException("You can't update this restaurant");
    // }
    // return this.restaurantRepository.save(updateRestaurantDto);
  }

  remove(id:  string) {
    return `This action removes a #${id} restaurant`;
  }
}
