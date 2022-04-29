import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class InputUser {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;

    @Field()
    readonly name: string;

    @Field()
    readonly phoneNum: string; 

}