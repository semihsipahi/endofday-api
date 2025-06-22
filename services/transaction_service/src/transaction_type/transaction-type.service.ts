import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTransactionTypeDto } from "dto/create-transaction-type.dto";
import { TransactionType } from "entity/transaction-type.entity";
import { Repository } from "typeorm";

@Injectable()
export class TransactionTypeService {
  @InjectRepository(TransactionType)
  private readonly transactionTypeRepository: Repository<TransactionType>;

  constructor() {}

  async createTransactionType(
    dto: CreateTransactionTypeDto
  ): Promise<TransactionType> {
    return await this.transactionTypeRepository.save({
      code: dto.code,
      name: dto.name,
      description: dto?.description,
    });
  }
}
