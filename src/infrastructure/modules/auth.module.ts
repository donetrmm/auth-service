import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { AuthUseCase } from '../../application/use-cases/auth.use-case';
import { UserRepository } from '../repositories/user.repository';
import { AuthController } from '../controllers/auth.controller';
import { JwtStrategy } from '../config/jwt.strategy';
import { jwtConfig } from '../config/jwt.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(jwtConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [
    AuthUseCase,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    JwtStrategy,
  ],
  exports: [AuthUseCase, JwtStrategy, PassportModule],
})
export class AuthModule {}