// Uncomment the code below and write your tests
import axios from 'axios';
import { THROTTLE_TIME, throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  const relativePath = 'users';
  const createConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com',
  };
  const mockData = { data: 'mockData' };

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should create instance with provided base url', async () => {
    const mockInstance = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi(relativePath);
    expect(mockInstance).toHaveBeenCalledWith(createConfig);
  });

  test('should perform request to correct provided url', async () => {
    const instance = axios.create(createConfig);

    const mockAxiosGet = jest.spyOn(instance, 'get');
    jest.spyOn(axios, 'create').mockReturnValue(instance);
    await throttledGetDataFromApi(relativePath);

    expect(mockAxiosGet).not.toHaveBeenCalled();

    jest.advanceTimersByTime(THROTTLE_TIME);

    expect(mockAxiosGet).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const instance = axios.create(createConfig);

    const mockAxiosGet = jest
      .spyOn(instance, 'get')
      .mockResolvedValue(mockData);
    jest.spyOn(axios, 'create').mockReturnValue(instance);
    const resolvedData = await throttledGetDataFromApi(relativePath);

    jest.advanceTimersByTime(THROTTLE_TIME);

    expect(mockAxiosGet).toHaveBeenCalled();
    expect(resolvedData).toBe(mockData.data);
  });
});
