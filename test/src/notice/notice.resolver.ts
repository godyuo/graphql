import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { NoticeDto } from './notice.dto';
import { InputNotice } from './notice.input';
import { NoticeService } from './notice.service';

@Resolver()
export class NoticeResolver {
    constructor(
        private noticeService: NoticeService
    ) {}

    @Mutation(() => NoticeDto)
    async write(@Args('data') data: InputNotice) {
        return await this.noticeService.write(data)
    }
}
