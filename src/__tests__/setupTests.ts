import { config } from '../utils/config';
import { server } from './server/Server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });

  config.apiUrl = 'http://localhost';
  config.privateAccessToken = '__PRIVATE_ACCESS_TOKEN';
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
