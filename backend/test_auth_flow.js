const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });

    req.on('error', (err) => reject(err));

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('=== [1] Testing Health Endpoint ===');
  const health = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/health',
    method: 'GET'
  });
  console.log('Health Response:', health);
  if (health.status !== 200) throw new Error('Health check failed');

  console.log('\n=== [2] Testing User Registration ===');
  const testUser = {
    name: 'Sarah Jenkins',
    email: `sarah.test.${Date.now()}@apex-imperial.edu`,
    password: 'Password123!',
    role: 'student',
    department: 'School of Computing & Artificial Intelligence'
  };

  const regRes = await request(
    {
      hostname: 'localhost',
      port: 5000,
      path: '/api/auth/register',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    testUser
  );
  console.log('Register Response:', regRes);
  if (regRes.status !== 201 || !regRes.data.token) {
    throw new Error('Registration failed: ' + JSON.stringify(regRes.data));
  }
  const token = regRes.data.token;
  console.log('✓ Token received:', token.substring(0, 20) + '...');

  console.log('\n=== [3] Testing Authenticated /api/auth/me ===');
  const meRes = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/auth/me',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log('GetMe Response:', meRes);
  if (meRes.status !== 200 || !meRes.data.user) {
    throw new Error('GetMe failed');
  }
  console.log('✓ Authenticated User:', meRes.data.user.name, `(${meRes.data.user.studentId})`);

  console.log('\n=== [4] Testing User Login ===');
  const loginRes = await request(
    {
      hostname: 'localhost',
      port: 5000,
      path: '/api/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    { email: testUser.email, password: testUser.password }
  );
  console.log('Login Response:', loginRes);
  if (loginRes.status !== 200 || !loginRes.data.token) {
    throw new Error('Login failed');
  }
  console.log('✓ Login verified successfully!');

  console.log('\n=== [5] Testing Invalid Password Handling ===');
  const failLogin = await request(
    {
      hostname: 'localhost',
      port: 5000,
      path: '/api/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },
    { email: testUser.email, password: 'WrongPassword999!' }
  );
  console.log('Fail Login Response:', failLogin);
  if (failLogin.status === 401) {
    console.log('✓ Properly rejected invalid credentials with 401');
  } else {
    throw new Error('Expected 401 on bad password');
  }

  console.log('\n=========================================');
  console.log('🎉 ALL BACKEND & AUTH TESTS PASSED PERFECTLY!');
  console.log('=========================================');
}

runTests().catch((err) => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
