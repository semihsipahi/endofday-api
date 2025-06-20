import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from "class-validator";
import {
  TransactionTypeCode,
  TransactionTypeRulesMap,
} from "../constants/transaction-type.constants";

export class CreateTransactionDto {
  @IsEnum(TransactionTypeCode)
  transactionTypeCode: TransactionTypeCode;

  @ValidateIf(
    (o) => TransactionTypeRulesMap[o.transactionTypeCode]?.requiresAccount
  )
  @IsUUID()
  accountId: string;

  @ValidateIf(
    (o) => TransactionTypeRulesMap[o.transactionTypeCode]?.requiresReferenceCode
  )
  @IsOptional()
  @IsString()
  referenceCode?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ValidateIf(
    (o) => TransactionTypeRulesMap[o.transactionTypeCode]?.requiresCash
  )
  @IsNotEmpty()
  @IsNumber()
  cashAmount?: number;

  @ValidateIf(
    (o) => TransactionTypeRulesMap[o.transactionTypeCode]?.requiresStock
  )
  @IsUUID()
  productId?: string;

  @ValidateIf(
    (o) => TransactionTypeRulesMap[o.transactionTypeCode]?.requiresStock
  )
  @IsNumber()
  quantity?: number;
}
