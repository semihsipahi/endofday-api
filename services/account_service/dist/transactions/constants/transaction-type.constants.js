"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeRulesMap = exports.TransactionTypeCode = void 0;
var TransactionTypeCode;
(function (TransactionTypeCode) {
    TransactionTypeCode["GOLD_ENTRY"] = "GOLD_ENTRY";
    TransactionTypeCode["DISCOUNT_CREDIT"] = "DISCOUNT_CREDIT";
    TransactionTypeCode["DISCOUNT_DEBIT"] = "DISCOUNT_DEBIT";
    TransactionTypeCode["RETURNED_OUT"] = "RETURNED_OUT";
    TransactionTypeCode["CONVERSION"] = "CONVERSION";
    TransactionTypeCode["SCRAP_OUT"] = "SCRAP_OUT";
    TransactionTypeCode["SCRAP_IN"] = "SCRAP_IN";
    TransactionTypeCode["MATERIAL_OUT"] = "MATERIAL_OUT";
    TransactionTypeCode["MATERIAL_IN"] = "MATERIAL_IN";
    TransactionTypeCode["OFFSET"] = "OFFSET";
    TransactionTypeCode["MATERIAL_RETURN"] = "MATERIAL_RETURN";
    TransactionTypeCode["MATERIAL_SALE"] = "MATERIAL_SALE";
    TransactionTypeCode["CASH_PAYMENT"] = "CASH_PAYMENT";
    TransactionTypeCode["CASH_COLLECTION"] = "CASH_COLLECTION";
    TransactionTypeCode["CUSTOM_PRODUCT_OUT"] = "CUSTOM_PRODUCT_OUT";
    TransactionTypeCode["CUSTOM_PRODUCT_IN"] = "CUSTOM_PRODUCT_IN";
})(TransactionTypeCode || (exports.TransactionTypeCode = TransactionTypeCode = {}));
exports.TransactionTypeRulesMap = {
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
//# sourceMappingURL=transaction-type.constants.js.map