export class CreateTransactionDto {
  accountId: string;
  transactionTypeCode: string;
  description?: string;
  referenceCode?: string;

  impacts: {
    currencyId: string;
    debit?: number;
    credit?: number;
  }[];

  cashAmount?: number; // opsiyonel, cash işlem için
  productId?: string; // opsiyonel, stok işlemleri için
  quantity?: number;
}
