import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class NoticeDto {
    @Field()
    readonly id?: number;

    @Field()
    readonly userId!: string;

    @Field()
    readonly title!: string;

    @Field()
    readonly content!: string;
}