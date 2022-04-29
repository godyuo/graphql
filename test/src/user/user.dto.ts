import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
    @Field()
    readonly id?: number;

    @Field()
    readonly email!: string;

    @Field()
    readonly password!: string;

    @Field()
    readonly phoneNum!: string;

    @Field()
    readonly name!: string;

}