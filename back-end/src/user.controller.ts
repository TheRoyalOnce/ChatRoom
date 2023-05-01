
import { Controller, Get, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('search')
  async searchUsersByName(
    @Query('match') match: string,
    @Query('id') id?: string,
  ): Promise<User[]> {
    return this.userService.searchUsersByName(match, id);
  }


  @Get('searchid')
  async searchUsersById(@Query('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
}