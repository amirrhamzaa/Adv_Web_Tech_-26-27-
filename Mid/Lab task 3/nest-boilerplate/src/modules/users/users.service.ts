import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    const savedUser = await this.userRepository.save(user);

    return {
      message: "User registered successfully",
      fullName: savedUser.fullName,
      email: savedUser.email,
      age: savedUser.age,
      accountType: savedUser.accountType,
    };
  }
}