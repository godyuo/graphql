import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from 'src/entities/notice';
import { Repository } from 'typeorm';
import { InputNotice } from './notice.input';

@Injectable()
export class NoticeService {
    constructor (
        @InjectRepository(Notice)
        private noticeRepository: Repository<Notice>
    ){}
    
    async write(data: InputNotice){
        const userdata = await this.noticeRepository.findOne({
          where: { email: data.email },
        });
        if (!userdata) {
          await this.noticeRepository.create(data).save();
          return true;
        }
        return false;
      }
}
