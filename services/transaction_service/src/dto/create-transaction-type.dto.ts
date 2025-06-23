import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionTypeDto {
  @ApiProperty({ description: "Transaction Type Code" })
  code: string;

  @ApiProperty({ description: "Transaction Type Name" })
  name: string;

  @ApiProperty({ description: "Transaction Type Description" })
  description?: string;
}
