import { z } from 'zod';

export const upsertRestaurant_validations = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  address: z.string().min(3, 'Address must be at least 3 characters'),
  phone: z.string().min(3, 'Phone must be at least 3 characters').max(8, 'Phone must be at most 8 characters'),
  availability: z.number().min(1, 'Availability must be at least 1'),
});

export type IUpsertRestaurantProps = z.infer<
  typeof upsertRestaurant_validations
>;
export const upsertRestaurant_initialState: IUpsertRestaurantProps = {
  id: '',
  name: '',
  description: '',
  address: '',
  phone: '',
  availability: 0
};
