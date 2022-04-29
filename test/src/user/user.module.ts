import { Module } from '@nestjs/common';
import { User } from '../entities/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: jwtConstants.accesssecret
  })],
  providers: [UserService, UserResolver],
})
export class UserModule {}
