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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_type_constants_1 = require("./constants/transaction-type.constants");
const transaction_type_dto_1 = require("./dto/transaction-type.dto");
const transaction_type_entity_1 = require("./entities/transaction-type.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
let TransactionsService = class TransactionsService {
    constructor(transactionRepo, transactionTypeRepo) {
        this.transactionRepo = transactionRepo;
        this.transactionTypeRepo = transactionTypeRepo;
    }
    async createTransaction(dto) {
        const typeRules = transaction_type_constants_1.TransactionTypeRulesMap[dto.transactionTypeCode];
        if (!typeRules) {
            throw new common_1.NotFoundException("Unknown transaction type");
        }
        const transaction = this.transactionRepo.create({
            account: dto.accountId ? { id: dto.accountId } : null,
            transactionType: { code: dto.transactionTypeCode },
            date: new Date(),
            description: dto.description,
            referenceCode: dto.referenceCode,
        });
        const saved = await this.transactionRepo.save(transaction);
        if (typeRules.requiresCash && dto.cashAmount) {
            console.log(`[CashService] Process → amount: ${dto.cashAmount}`);
        }
        if (typeRules.requiresStock && dto.productId && dto.quantity) {
            console.log(`[StockService] Process → productId: ${dto.productId}, qty: ${dto.quantity}`);
        }
        return saved;
    }
    async getTransactionTypes() {
        const types = await this.transactionTypeRepo.find({
            select: ["id", "code", "name", "description"],
            order: { name: "ASC" },
        });
        return transaction_type_dto_1.TransactionTypeDto.fromEntities(types);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __param(1, (0, typeorm_1.InjectRepository)(transaction_type_entity_1.TransactionType)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map