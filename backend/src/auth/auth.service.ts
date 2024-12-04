import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await user.comparePassword(password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { username: user._doc.username, role: user._doc.role, sub:user._doc._id };
    console.log(payload)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, password: string, role: string) {
    return this.usersService.create(username, password, role);
  }
}
