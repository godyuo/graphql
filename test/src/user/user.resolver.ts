import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { InputUser } from "./user.input";
import { UserDate } from "./user.date";
import { UserDelete } from "./user.delete";


@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}
    @Query(() => UserDto)
    async login(@Args('data') data: InputUser){
        return await this.userService.login(data);
    }

    @Mutation(() => UserDto)
    async signup(@Args('data') data: InputUser) {
        return await this.userService.signup(data)
    }

    @Query(() => UserDto)
    async findAll() {
        return await this.userService.findAll();
    }

    @Mutation(() => UserDto)
    async userupdate(@Args('data') data: InputUser, @Args('Date') Date: UserDate){
        return await this.userService.userupdate(data, Date)
    }

    @Mutation(() => UserDto)
    async delete(@Args('data') data: UserDelete, @Args('user') user: InputUser) {
        return await this.userService.delete_account(data, user)
    }
}