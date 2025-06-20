import { IsOptional, IsUUID } from "class-validator";

export class FilterTransactionsDto {
  @IsOptional()
  @IsUUID()
  accountId?: string;
}
