import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/seedWork/base.repository.interface';
import { User } from 'src/users/domain/entities/user.entity';
import { IUserRepository } from 'src/users/domain/repositories/user.repository.interface';
import { Repository } from 'typeorm';

export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    super();
  }
  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  findById(id: string): Promise<User> {
    return this.userRepository.findOneBy({
      _id: id,
    });
  }
}
