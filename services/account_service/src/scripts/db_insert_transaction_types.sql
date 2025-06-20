INSERT INTO transaction_types (id, name, code, description, affects_stock, affects_cash, balance_increase) VALUES
-- 1. Gold Entry
(gen_random_uuid(), 'Gold Entry', 'GOLD_ENTRY', 'Cari hesaptan altın girişi (stok artar, borç artar)', TRUE, FALSE, TRUE),

-- 2. Discount Credit
(gen_random_uuid(), 'Discount Credit', 'DISCOUNT_CREDIT', 'Cari borcuna iskonto uygulanır (borç azalır)', FALSE, FALSE, FALSE),

-- 3. Discount Debit
(gen_random_uuid(), 'Discount Debit', 'DISCOUNT_DEBIT', 'Cari alacağına iskonto verilir (alacak azalır)', FALSE, FALSE, FALSE),

-- 4. Returned Out
(gen_random_uuid(), 'Returned Out', 'RETURNED_OUT', 'Daha önce alınan ürün iade edilir (stok azalır, borç azalır)', TRUE, FALSE, FALSE),

-- 5. Conversion
(gen_random_uuid(), 'Conversion', 'CONVERSION', 'Altının ayarı değiştirilir (stok içi giriş/çıkış)', TRUE, FALSE, FALSE),

-- 6. Scrap Out
(gen_random_uuid(), 'Scrap Out', 'SCRAP_OUT', 'Hurda çıkışı yapılır (stok azalır)', TRUE, FALSE, FALSE),

-- 7. Scrap In
(gen_random_uuid(), 'Scrap In', 'SCRAP_IN', 'Hurda girişi yapılır (stok artar, borç artar)', TRUE, FALSE, TRUE),

-- 8. Material Out
(gen_random_uuid(), 'Material Out', 'MATERIAL_OUT', 'Malzeme çıkışı yapılır (stok azalır)', TRUE, FALSE, FALSE),

-- 9. Material In
(gen_random_uuid(), 'Material In', 'MATERIAL_IN', 'Malzeme girişi yapılır (stok artar, borç artar)', TRUE, FALSE, TRUE),

-- 10. Offset
(gen_random_uuid(), 'Offset', 'OFFSET', 'Stok ve para karşılıklı mahsuplaşır (borç/alacak kapanır)', FALSE, FALSE, FALSE),

-- 11. Material Return
(gen_random_uuid(), 'Material Return', 'MATERIAL_RETURN', 'Cariye iade edilen malzeme (stok azalır, alacak azalır)', TRUE, FALSE, FALSE),

-- 12. Material Sale
(gen_random_uuid(), 'Material Sale', 'MATERIAL_SALE', 'Cariye malzeme satışı (stok azalır, alacak artar)', TRUE, FALSE, FALSE),

-- 13. Cash Payment
(gen_random_uuid(), 'Cash Payment', 'CASH_PAYMENT', 'Cariye nakit ödeme (nakit azalır, borç azalır)', FALSE, TRUE, FALSE),

-- 14. Cash Collection
(gen_random_uuid(), 'Cash Collection', 'CASH_COLLECTION', 'Cariden nakit tahsilat (nakit artar, alacak azalır)', FALSE, TRUE, FALSE),

-- 15. Custom Product Out
(gen_random_uuid(), 'Custom Product Out', 'CUSTOM_PRODUCT_OUT', 'Özel ürün çıkışı yapılır (stok azalır, alacak artar)', TRUE, FALSE, FALSE),

-- 16. Custom Product In
(gen_random_uuid(), 'Custom Product In', 'CUSTOM_PRODUCT_IN', 'Özel ürün girişi yapılır (stok artar, borç artar)', TRUE, FALSE, TRUE);
