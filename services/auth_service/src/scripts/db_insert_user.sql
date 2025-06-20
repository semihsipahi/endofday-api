INSERT INTO users (clerk_user_id, email, full_name, role, branch_id)
SELECT
  'clerk_test_id_001',
  'testuser@example.com',
  'Test User',
  'admin',
  id
FROM branches
WHERE name = 'Kardeşler Kuyumculuk';
