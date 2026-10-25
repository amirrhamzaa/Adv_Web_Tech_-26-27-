
import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(data: Partial<Product>) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  async update(id: number, data: Partial<Product>) {
    const product = await this.findOne(id);
    Object.assign(product, data);
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return { message: `Product ${id} deleted successfully` };
  }
}
