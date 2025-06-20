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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const transaction_type_dto_1 = require("./dto/transaction-type.dto");
const transaction_entity_1 = require("./entities/transaction.entity");
const transactions_service_1 = require("./transactions.service");
let TransactionsController = class TransactionsController {
    constructor(trxService) {
        this.trxService = trxService;
    }
    async create(dto) {
        try {
            return await this.trxService.createTransaction(dto);
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async getTypes() {
        return this.trxService.getTransactionTypes();
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Yeni işlem oluştur" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "İşlem başarıyla oluşturuldu",
        type: transaction_entity_1.Transaction,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Geçersiz işlem veya eksik alan" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("types"),
    (0, swagger_1.ApiOperation)({ summary: "Tüm işlem tiplerini getirir" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Liste halinde işlem tipleri döner",
        type: [transaction_type_dto_1.TransactionTypeDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getTypes", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, swagger_1.ApiTags)("Transactions"),
    (0, common_1.Controller)("transactions"),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
//# sourceMappingURL=transactions.controller.js.map