import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Transaction } from "../../../transaction_service/src/entity/transaction.entity";
import { CreateTransactionDto } from "../dto/create-transaction.dto";
import { TransactionsService } from "../transaction/transaction.service";

@ApiTags("Transactions")
@Controller("transactions")
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post()
  @ApiOperation({ summary: "Yeni cari işlem oluştur" })
  @ApiResponse({
    status: 201,
    description: "İşlem başarıyla oluşturuldu",
    type: Transaction,
  })
  @ApiResponse({ status: 400, description: "Geçersiz işlem veya eksik alan" })
  async create(@Body() dto: CreateTransactionDto): Promise<Transaction> {
    try {
      return await this.transactionService.createTransaction(dto);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
