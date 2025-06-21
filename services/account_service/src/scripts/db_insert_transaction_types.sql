INSERT INTO transaction_types (id, code, name, description) VALUES
  ('11111111-1111-1111-1111-111111111111', 'GOLD_ENTRY', 'Gold Entry', 'Altın Girişi'),
  ('22222222-2222-2222-2222-222222222222', 'DISCOUNT_CREDIT', 'Discount Credit', 'İskonto Alacak'),
  ('33333333-3333-3333-3333-333333333333', 'DISCOUNT_DEBIT', 'Discount Debit', 'İskonto Borç'),
  ('44444444-4444-4444-4444-444444444444', 'RETURNED_OUT', 'Returned Out', 'Çıkan İade'),
  ('55555555-5555-5555-5555-555555555555', 'CONVERSION', 'Conversion', 'Çevirme'),
  ('66666666-6666-6666-6666-666666666666', 'SCRAP_OUT', 'Scrap Out', 'Hurda Çıkış'),
  ('77777777-7777-7777-7777-777777777777', 'SCRAP_IN', 'Scrap In', 'Hurda Giriş'),
  ('88888888-8888-8888-8888-888888888888', 'MATERIAL_OUT', 'Material Out', 'Malzeme Çıkış'),
  ('99999999-9999-9999-9999-999999999999', 'MATERIAL_IN', 'Material In', 'Malzeme Giriş'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'OFFSET', 'Offset', 'Mahzup'),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'MATERIAL_RETURN', 'Material Return', 'Malzeme İade'),
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'MATERIAL_SALE', 'Material Sale', 'Malzeme Satış'),
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'CASH_PAYMENT', 'Cash Payment', 'Kasa Ödeme'),
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'CASH_COLLECTION', 'Cash Collection', 'Kasa Tahsilat'),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'CUSTOM_PRODUCT_OUT', 'Custom Product Out', 'Özel Ürün Çıkış'),
  ('00000000-0000-0000-0000-000000000000', 'CUSTOM_PRODUCT_IN', 'Custom Product In', 'Özel Ürün Giriş')
ON CONFLICT (code) DO NOTHING;
