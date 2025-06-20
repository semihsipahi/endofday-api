CREATE TABLE account_types (
    id UUID PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL, -- örnek: 'customer', 'supplier'
    name VARCHAR(100) NOT NULL        -- örnek: 'Müşteri', 'Tedarikçi'
);
-- Sistemdeki tüm cari tiplerini tanımlar.
-- code: sistemsel kullanım, name: gösterim amacıyla

CREATE TABLE accounts (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_type_id UUID NOT NULL REFERENCES account_types(id),
    balance NUMERIC(18, 4) DEFAULT 0
);
-- account_type_id: account_types tablosuna bağlı foreign key

CREATE TABLE transaction_types (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    code VARCHAR(100) NOT NULL UNIQUE,
    affects_stock BOOLEAN DEFAULT FALSE,
    affects_cash BOOLEAN DEFAULT FALSE,
    balance_increase BOOLEAN -- TRUE: borç artışı, FALSE: alacak artışı
);
-- Örnek kayıt: name = 'Gold Entry', code = 'GOLD_ENTRY'
-- affects_stock: stokta hareket yaratır mı?
-- affects_cash: nakit işlemi var mı?

CREATE TABLE transactions (
    id UUID PRIMARY KEY,
    account_id UUID NOT NULL REFERENCES accounts(id),
    transaction_type_id UUID NOT NULL REFERENCES transaction_types(id),
    date TIMESTAMP DEFAULT NOW(),
    description TEXT,
    reference_code VARCHAR(100)
);
-- Tüm işlemlerin ortak tablosu
-- reference_code: fatura no, belge no vs.

CREATE TABLE stock_movements (
    id UUID PRIMARY KEY,
    transaction_id UUID NOT NULL REFERENCES transactions(id),
    product_id UUID NOT NULL,
    quantity NUMERIC(18, 4) NOT NULL,
    unit VARCHAR(20) DEFAULT 'gram',
    direction VARCHAR(10) CHECK (direction IN ('in', 'out'))
);
-- Stokta ürün bazlı giriş-çıkış kayıtları
-- direction: giriş mi çıkış mı (örnek: hurda çıkış = out)

CREATE TABLE cash_movements (
    id UUID PRIMARY KEY,
    transaction_id UUID NOT NULL REFERENCES transactions(id),
    amount NUMERIC(18, 4) NOT NULL,
    currency VARCHAR(10) DEFAULT 'TRY',
    direction VARCHAR(10) CHECK (direction IN ('in', 'out')),
    cashbox_id UUID
);
-- direction: 'in' = tahsilat, 'out' = ödeme
-- cashbox_id: hangi kasa kullanıldı

select * from transaction_types


