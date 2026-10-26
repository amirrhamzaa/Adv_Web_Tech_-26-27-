
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(data: CreateCategoryDto) {
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }
}
