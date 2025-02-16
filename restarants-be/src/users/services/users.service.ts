import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/entities/user.entity';
import { ObjectId, Repository } from 'typeorm';
import { UserRepository } from '../infrastructure/repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
   private userRepository:UserRepository
  ) {}
  create(createUserDto: CreateUserDto) {
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  getUserProfile(id: string) {
    return this.userRepository.findById(id);
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
