import { User } from 'src/auth/domain/entities/user.entity';
import { BaseRepository } from 'src/seedWork/base.repository.interface';
import { IUserRepository } from 'src/auth/domain/repositories/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User)
    private restaurantRepository: Repository<User>,
  ) {
    super();
  }
  create(user: User): Promise<User> {
    return this.restaurantRepository.save(user);
  }
  findByEmail(email: string): Promise<User> {
    return this.restaurantRepository.findOneBy({
      email,
    });
  }
}
