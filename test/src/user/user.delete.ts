import { ObjectType, Field, Int, InputType } from "@nestjs/graphql";

@InputType()
export class UserDelete {

    @Field()
    readonly password!: string;
}