CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- branches tablosu
CREATE TABLE branches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  code TEXT NOT NULL
);

-- accounts tablosu
CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  branch_id UUID NOT NULL,
  CONSTRAINT fk_accounts_branch FOREIGN KEY (branch_id) REFERENCES branches(id)
);

-- currencies tablosu
CREATE TABLE currencies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL
);

-- products tablosu
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  unit TEXT NOT NULL,
  category TEXT NOT NULL
);

-- users tablosu
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  clerk_id TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL
);

-- transaction_types tablosu
CREATE TABLE transaction_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT
);

-- transactions tablosu
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_id UUID NOT NULL,
  transaction_type_id UUID NOT NULL,
  created_by UUID NOT NULL,
  date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  description TEXT,
  reference_code TEXT,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
  deleted_at TIMESTAMP WITHOUT TIME ZONE,

  CONSTRAINT fk_transactions_account FOREIGN KEY (account_id) REFERENCES accounts(id),
  CONSTRAINT fk_transactions_transaction_type FOREIGN KEY (transaction_type_id) REFERENCES transaction_types(id),
  CONSTRAINT fk_transactions_created_by FOREIGN KEY (created_by) REFERENCES users(id)
);

-- transaction_impacts tablosu
CREATE TABLE transaction_impacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_id UUID NOT NULL,
  currency_id UUID NOT NULL,
  debit NUMERIC DEFAULT 0 NOT NULL,
  credit NUMERIC DEFAULT 0 NOT NULL,

  CONSTRAINT fk_impacts_transaction FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
  CONSTRAINT fk_impacts_currency FOREIGN KEY (currency_id) REFERENCES currencies(id)
);
