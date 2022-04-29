import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class InputNotice {
    @Field()
    readonly email: string;

    @Field()
    readonly content: string;

    @Field()
    readonly title: string;

}