import { FindManyOptions, ObjectId } from "typeorm";
import { Restaurant } from "../entities/restaurant.entity";
import { IRestaurantRepository } from "../repositories/restaurant.repository.interface";

export class RestaurantsByOwnerSpecification {
    constructor(private ownerId:string){}
    
     satisfingElementsFrom(restaurantRepository:IRestaurantRepository):Promise<Restaurant[]>{
        return restaurantRepository.findByOwnerId(this.ownerId);
    }

}