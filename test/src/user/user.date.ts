import { ObjectType, Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class UserDate {

    @Field()
    readonly updatedAt?: Date;
}