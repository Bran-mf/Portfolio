import { Restaurant } from "../entities/restaurant.entity";


export interface IRestaurantRepository {
    findByOwnerId(ownerId: string): Promise<Restaurant[]>;
}