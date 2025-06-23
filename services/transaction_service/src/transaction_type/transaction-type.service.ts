import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTransactionTypeDto } from "dto/create-transaction-type.dto";
import { UpdateTransactionTypeDto } from "dto/update-transaction-type.dto";
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

  async getTransactionTypes(): Promise<TransactionType[]> {
    return await this.transactionTypeRepository.find();
  }

  async getTransactionTypeById(id: string): Promise<TransactionType> {
    return await this.transactionTypeRepository.findOneByOrFail({ id });
  }

  async getTransactionTypeByCode(code: string): Promise<TransactionType> {
    return await this.transactionTypeRepository.findOneBy({ code });
  }

  async updateTransactionType(
    id: string,
    dto: Partial<UpdateTransactionTypeDto>
  ): Promise<TransactionType> {
    await this.transactionTypeRepository.update(id, dto);
    return this.transactionTypeRepository.findOneByOrFail({ id });
  }

  async deleteTransactionType(id: string): Promise<void> {
    await this.transactionTypeRepository.delete(id);
  }
}
