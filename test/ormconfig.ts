import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Notice } from './src/entities/notice';
import { User } from './src/entities/user';

import * as dotenv from 'dotenv';
dotenv.config();

const config: TypeOrmModuleOptions = {
  type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: process.env.PASSWORD || '12fndltm1212',
    database: process.env.DATABASE || 'terablue',
    entities: [Notice, User],
    synchronize: true,
    autoLoadEntities:true,
    logging:true,
};

export = config;
