import apiClient from './apiClient';

test('apiClient is configured to point to api', () => {
  expect(apiClient.defaults.baseURL).toBe('http://localhost:4000');
});

test('api/captains endpoint works', async () => {
  expect.assertions(2);
  try {
    const response = await apiClient.get('/captains');
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(4);
  } catch (error) {
    console.log('Be sure you have started the mock api: npm run api');
    throw error;
  }
});

test('api/ships endpoint works', async () => {
  expect.assertions(2);
  try {
    const response = await apiClient.get('/ships');
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(4);
  } catch (error) {
    console.log('Be sure you have started the mock api: npm run api');
    throw error;
  }
});
