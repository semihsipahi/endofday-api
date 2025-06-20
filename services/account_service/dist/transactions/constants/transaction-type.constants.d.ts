export declare enum TransactionTypeCode {
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
    CUSTOM_PRODUCT_IN = "CUSTOM_PRODUCT_IN"
}
export declare const TransactionTypeRulesMap: {
    [key in TransactionTypeCode]: {
        requiresAccount: boolean;
        requiresStock: boolean;
        requiresCash: boolean;
        requiresReferenceCode?: boolean;
    };
};
