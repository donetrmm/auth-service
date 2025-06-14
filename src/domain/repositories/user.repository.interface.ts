import { User } from '../entities/user.entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: Partial<User>): Promise<User>;
  findById(id: string): Promise<User | null>;
}