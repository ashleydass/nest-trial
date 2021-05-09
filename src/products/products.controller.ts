import { Body, Controller, Get, Post } from "@nestjs/common";
import { Product } from "./product.entity";
import ProductsService from "./products.service";

@Controller('products')
export default class ProductsController {
  constructor(private readonly productsService: ProductsService){    
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.getAllProducts();
  }

  @Post()
  async createProduct(@Body('name') name: string): Promise<Product> {
    return await this.productsService.createProduct(name);
  }
}