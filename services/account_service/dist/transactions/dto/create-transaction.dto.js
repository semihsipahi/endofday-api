"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionDto = void 0;
const class_validator_1 = require("class-validator");
const transaction_type_constants_1 = require("../constants/transaction-type.constants");
class CreateTransactionDto {
}
exports.CreateTransactionDto = CreateTransactionDto;
__decorate([
    (0, class_validator_1.IsEnum)(transaction_type_constants_1.TransactionTypeCode),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "transactionTypeCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => transaction_type_constants_1.TransactionTypeRulesMap[o.transactionTypeCode]?.requiresAccount),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "accountId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => transaction_type_constants_1.TransactionTypeRulesMap[o.transactionTypeCode]?.requiresReferenceCode),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "referenceCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => transaction_type_constants_1.TransactionTypeRulesMap[o.transactionTypeCode]?.requiresCash),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "cashAmount", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => transaction_type_constants_1.TransactionTypeRulesMap[o.transactionTypeCode]?.requiresStock),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => transaction_type_constants_1.TransactionTypeRulesMap[o.transactionTypeCode]?.requiresStock),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "quantity", void 0);
//# sourceMappingURL=create-transaction.dto.js.map