import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransactionTypeDto } from "dto/create-transaction-type.dto";
import { TransactionType } from "entity/transaction-type.entity";
import { Transaction } from "../../../transaction_service/src/entity/transaction.entity";
import { TransactionTypeService } from "./transaction-type.service";

@ApiTags("Transactions-Types")
@Controller("transaction-types")
export class TransactionTypeController {
  constructor(
    private readonly transactionTypeService: TransactionTypeService
  ) {}

  @Post()
  @ApiOperation({ summary: "Yeni cari işlem tipi oluştur" })
  @ApiResponse({
    status: 201,
    description: "İşlem başarıyla oluşturuldu",
    type: Transaction,
  })
  @ApiResponse({ status: 400, description: "Geçersiz işlem veya eksik alan" })
  async create(
    @Body() dto: CreateTransactionTypeDto
  ): Promise<TransactionType> {
    try {
      return await this.transactionTypeService.createTransactionType(dto);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
