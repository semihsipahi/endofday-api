import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransactionTypeDto } from "dto/create-transaction-type.dto";
import { UpdateTransactionTypeDto } from "dto/update-transaction-type.dto";
import { TransactionType } from "entity/transaction-type.entity";
import { TransactionTypeService } from "./transaction-type.service";

@ApiTags("Transaction Types")
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
  @ApiOperation({ summary: "Tüm işlem tiplerini listeler" })
  @ApiResponse({
    status: 200,
    description: "İşlem tipleri başarıyla listelendi",
    type: [TransactionType],
  })
  async gets(): Promise<TransactionType[]> {
    try {
      return await this.transactionTypeService.getTransactionTypes();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get(":id")
  @ApiOperation({ summary: "ID ile işlem tipi getir" })
  @ApiResponse({ status: 200, type: TransactionType })
  @ApiResponse({
    status: 400,
    description: "Geçersiz ID formatı veya işlem bulunamadı",
  })
  async getById(
    @Param("id", new ParseUUIDPipe()) id: string
  ): Promise<TransactionType> {
    try {
      return await this.transactionTypeService.getTransactionTypeById(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Patch(":id")
  @ApiOperation({ summary: "İşlem tipini güncelle" })
  @ApiResponse({ status: 200, type: TransactionType })
  @ApiResponse({ status: 400, description: "Geçersiz veri veya ID" })
  async update(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() dto: Partial<UpdateTransactionTypeDto>
  ): Promise<TransactionType> {
    try {
      return await this.transactionTypeService.updateTransactionType(id, dto);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Delete(":id")
  @ApiOperation({ summary: "İşlem tipini sil" })
  @ApiResponse({ status: 200, description: "Silme işlemi başarılı" })
  @ApiResponse({ status: 400, description: "Geçersiz ID" })
  async remove(@Param("id", new ParseUUIDPipe()) id: string): Promise<void> {
    try {
      return await this.transactionTypeService.deleteTransactionType(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get("code/:code")
  @ApiOperation({ summary: "Kod ile işlem tipi getir" })
  @ApiResponse({ status: 200, type: TransactionType })
  @ApiResponse({ status: 404, description: "Kod bulunamadı" })
  async getByCode(@Param("code") code: string): Promise<TransactionType> {
    try {
      return await this.transactionTypeService.getTransactionTypeByCode(code);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
