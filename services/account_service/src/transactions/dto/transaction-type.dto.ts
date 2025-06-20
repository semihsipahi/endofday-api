// src/transactions/dto/transaction-type.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { TransactionType } from "transactions/entities/transaction-type.entity";

export class TransactionTypeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  /**
   * Tek bir entity’den DTO üretir
   */
  static fromEntity(entity: TransactionType): TransactionTypeDto {
    const dto = new TransactionTypeDto();
    dto.id = entity.id;
    dto.code = entity.code;
    dto.name = entity.name;
    dto.description = entity.description;
    return dto;
  }

  /**
   * Birden çok entity’yi DTO listesine çevirir
   */
  static fromEntities(entities: TransactionType[]): TransactionTypeDto[] {
    return entities.map((e) => TransactionTypeDto.fromEntity(e));
  }
}
