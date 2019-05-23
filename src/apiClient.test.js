import apiClient from './apiClient';

test('apiClient is configured to point to api', () => {
  expect(apiClient.defaults.baseURL).toBe('http://localhost:5000/api');
});

test('api/captains endpoint works', async () => {
  try {
    const response = await apiClient.get('/captains');
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(4);
  } catch (error) {
    console.log('Be sure you have started the mock api: npm run api');
    expect(true).toBe(false);
  }
});

test('api/ships endpoint works', async () => {
  try {
    const response = await apiClient.get('/ships');
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(4);
  } catch (error) {
    console.log('Be sure you have started the mock api: npm run api');
    expect(true).toBe(false);
  }
});
