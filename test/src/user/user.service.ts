import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth/constants';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { InputUser } from './user.input';
import { JwtService } from '@nestjs/jwt';
import { extendSchemaImpl } from 'graphql/utilities/extendSchema';
import { UserDate } from './user.date';
import { UserDelete } from './user.delete';


@Injectable()
export class UserService {
    
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async login(data: InputUser) {
        const userdata = await this.userRepository.findOne({
          where: { email: data.email, password: data.password },
        });
        if (userdata) {
          return this.jwtService.sign(data);
        }
        throw new NotFoundException('login fail');
      }

      async signup(data: InputUser){
        const userdata = await this.userRepository.findOne({
          where: { email: data.email },
        });
        if (!userdata) {
          await this.userRepository.create(data).save();
          return true;
        }
        return false;
      }

      async delete_account(data: UserDelete, user: InputUser){
          
        if (data.password !== user.password) {
          return 1;
        }
        const userdata = await this.userRepository.findOne({
          where: { name: user.name },
        });
        if (!userdata) {
          return false;
        }
        if (userdata) {
          await this.userRepository.delete(userdata.id);
          return true;
        }
      }

      async refreshtoken(data: UserDto) {
        const userdata = await this.userRepository.findOne({
          where: { email: data.email },
        });
        const token = this.jwtService.sign(data, {
          secret: jwtConstants.refreshsecret,
          expiresIn: `10800s`,
        });
    
        return token;
      }

      async findAll() {
         return await this.userRepository.find()
      }

      async userupdate(data: InputUser, Date: UserDate) {
          const userdata = await this.userRepository.findOne({ where: { email: data.email }})
          if(userdata){
              userdata.password = data.password;
              userdata.phoneNum = data.phoneNum;
              userdata.name = data.name;
              userdata.updatedAt = Date.updatedAt
              return await this.userRepository.save(userdata)
          }
      }
}
