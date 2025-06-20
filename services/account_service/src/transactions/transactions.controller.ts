// src/transactions/transactions.controller.ts

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionTypeDto } from "./dto/transaction-type.dto";
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

  @Get("types")
  @ApiOperation({ summary: "Tüm işlem tiplerini getirir" })
  @ApiResponse({
    status: 200,
    description: "Liste halinde işlem tipleri döner",
    type: [TransactionTypeDto],
  })
  async getTypes(): Promise<TransactionTypeDto[]> {
    return this.trxService.getTransactionTypes();
  }
}
