import { Controller, Get, UseGuards } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { RoleGuard } from '../auth/role.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('roles', ['Admin'])
  @Get('admin')
  adminAccess() {
    return { message: 'Welcome, Admin!' };
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('roles', ['Superuser'])
  @Get('superuser')
  superuserAccess() {
    return { message: 'Welcome, Superuser!' };
  }
}
