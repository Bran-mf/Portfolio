import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { ObjectId } from 'typeorm';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
    _id:ObjectId;
}
