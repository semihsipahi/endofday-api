import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1750585765281 implements MigrationInterface {
    name = 'Auto1750585765281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "currencies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_9f8d0972aeeb5a2277e40332d29" UNIQUE ("code"), CONSTRAINT "PK_d528c54860c4182db13548e08c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction_impacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "debit" numeric NOT NULL DEFAULT '0', "credit" numeric NOT NULL DEFAULT '0', "transaction_id" uuid, "currency_id" uuid, CONSTRAINT "PK_982c3877924adcc05dcd510ca03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_fc49dd32ae315ae66d0edab95f9" UNIQUE ("code"), CONSTRAINT "PK_2a49fe7879bf8a02812639cea61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "account_id" character varying NOT NULL, "created_by" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "description" character varying, "reference_code" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "transaction_type_id" uuid, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_type_meta_schemas_transactiontypecode_enum" AS ENUM('GOLD_ENTRY', 'DISCOUNT_CREDIT', 'DISCOUNT_DEBIT', 'RETURNED_OUT', 'CONVERSION', 'SCRAP_OUT', 'SCRAP_IN', 'MATERIAL_OUT', 'MATERIAL_IN', 'OFFSET', 'MATERIAL_RETURN', 'MATERIAL_SALE', 'CASH_PAYMENT', 'CASH_COLLECTION', 'CUSTOM_PRODUCT_OUT', 'CUSTOM_PRODUCT_IN')`);
        await queryRunner.query(`CREATE TABLE "transaction_type_meta_schemas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "transactionTypeCode" "public"."transaction_type_meta_schemas_transactiontypecode_enum" NOT NULL, "schema" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_44fa84dd0e1656fbb82f121edba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transaction_impacts" ADD CONSTRAINT "FK_e83561577082721d8dd8bdbdac7" FOREIGN KEY ("transaction_id") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction_impacts" ADD CONSTRAINT "FK_552055de3c66622dc3e52cd66e2" FOREIGN KEY ("currency_id") REFERENCES "currencies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_0088fd11d7d79f73d8824a10fcc" FOREIGN KEY ("transaction_type_id") REFERENCES "transaction_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_0088fd11d7d79f73d8824a10fcc"`);
        await queryRunner.query(`ALTER TABLE "transaction_impacts" DROP CONSTRAINT "FK_552055de3c66622dc3e52cd66e2"`);
        await queryRunner.query(`ALTER TABLE "transaction_impacts" DROP CONSTRAINT "FK_e83561577082721d8dd8bdbdac7"`);
        await queryRunner.query(`DROP TABLE "transaction_type_meta_schemas"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_type_meta_schemas_transactiontypecode_enum"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "transaction_types"`);
        await queryRunner.query(`DROP TABLE "transaction_impacts"`);
        await queryRunner.query(`DROP TABLE "currencies"`);
    }

}
