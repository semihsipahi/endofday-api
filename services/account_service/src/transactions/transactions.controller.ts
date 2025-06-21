// src/transactions/transactions.controller.ts

import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { Transaction } from "./entities/transaction.entity";
import { TransactionsService } from "./transactions.service";

@ApiTags("Transactions")
@Controller("transactions")
export class TransactionsController {
  constructor(private readonly trxService: TransactionsService) {}

  @Post()
  @ApiOperation({ summary: "Yeni işlem oluştur" })
  @ApiResponse({
    status: 201,
    description: "İşlem başarıyla oluşturuldu",
    type: Transaction,
  })
  @ApiResponse({ status: 400, description: "Geçersiz işlem veya eksik alan" })
  async create(@Body() dto: CreateTransactionDto): Promise<Transaction> {
    try {
      return await this.trxService.createTransaction(dto);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
