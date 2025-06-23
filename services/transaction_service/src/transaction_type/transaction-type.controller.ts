import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransactionTypeDto } from "dto/create-transaction-type.dto";
import { UpdateTransactionTypeDto } from "dto/update-transaction-type.dto";
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
    type: TransactionType,
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

  @Get()
  @ApiOperation({ summary: "Tüm Cari İşlemlerini Döner" })
  @ApiResponse({
    status: 201,
    description: "İşlem başarıyla oluşturuldu",
    type: Transaction,
  })
  @ApiResponse({ status: 400, description: "Geçersiz işlem veya eksik alan" })
  async gets(): Promise<TransactionType[]> {
    try {
      return await this.transactionTypeService.getTransactionTypes();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: Partial<UpdateTransactionTypeDto>
  ): Promise<TransactionType> {
    return this.transactionTypeService.updateTransactionType(id, dto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<void> {
    return this.transactionTypeService.deleteTransactionType(id);
  }
}
