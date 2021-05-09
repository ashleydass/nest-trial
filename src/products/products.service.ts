import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export default class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>) {    
  }

  getAllProducts = () => {
    return this.productsRepository.find();
  };

  createProduct = (name: string, isActive: boolean = true) => {
    const product = this.productsRepository.create({
      isActive, name
    });

    return this.productsRepository.save(product);
  }
};
