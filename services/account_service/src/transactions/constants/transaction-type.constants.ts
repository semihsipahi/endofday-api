export enum TransactionTypeCode {
  GOLD_ENTRY = "GOLD_ENTRY",
  DISCOUNT_CREDIT = "DISCOUNT_CREDIT",
  DISCOUNT_DEBIT = "DISCOUNT_DEBIT",
  RETURNED_OUT = "RETURNED_OUT",
  CONVERSION = "CONVERSION",
  SCRAP_OUT = "SCRAP_OUT",
  SCRAP_IN = "SCRAP_IN",
  MATERIAL_OUT = "MATERIAL_OUT",
  MATERIAL_IN = "MATERIAL_IN",
  OFFSET = "OFFSET",
  MATERIAL_RETURN = "MATERIAL_RETURN",
  MATERIAL_SALE = "MATERIAL_SALE",
  CASH_PAYMENT = "CASH_PAYMENT",
  CASH_COLLECTION = "CASH_COLLECTION",
  CUSTOM_PRODUCT_OUT = "CUSTOM_PRODUCT_OUT",
  CUSTOM_PRODUCT_IN = "CUSTOM_PRODUCT_IN",
}

export const TransactionTypeRulesMap: {
  [key in TransactionTypeCode]: {
    requiresAccount: boolean;
    requiresStock: boolean;
    requiresCash: boolean;
    requiresReferenceCode?: boolean;
  };
} = {
  GOLD_ENTRY: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  DISCOUNT_CREDIT: {
    requiresAccount: true,
    requiresStock: false,
    requiresCash: false,
  },
  DISCOUNT_DEBIT: {
    requiresAccount: true,
    requiresStock: false,
    requiresCash: false,
  },
  RETURNED_OUT: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  CONVERSION: {
    requiresAccount: false,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  SCRAP_OUT: {
    requiresAccount: false,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  SCRAP_IN: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  MATERIAL_OUT: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
  },
  MATERIAL_IN: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
  },
  OFFSET: {
    requiresAccount: true,
    requiresStock: false,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  MATERIAL_RETURN: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
  },
  MATERIAL_SALE: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
    requiresReferenceCode: true,
  },
  CASH_PAYMENT: {
    requiresAccount: true,
    requiresStock: false,
    requiresCash: true,
  },
  CASH_COLLECTION: {
    requiresAccount: true,
    requiresStock: false,
    requiresCash: true,
  },
  CUSTOM_PRODUCT_OUT: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
  },
  CUSTOM_PRODUCT_IN: {
    requiresAccount: true,
    requiresStock: true,
    requiresCash: false,
  },
};
