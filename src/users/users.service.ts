import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(userData: { email: string; password: string }) {
    /* let pipe =
      (...fns: Array<string>) =>
      (elemento: Object) =>
      (cls: Repository<User>) =>
        fns.reduce((acc, fn) => cls[fn](acc), elemento);

    return pipe('create', 'save')(userData)(this.userRepository); */

    const user = this.userRepository.create(userData);
    
    return this.userRepository.save(user);
  }
}
