import { rest } from 'msw';

import languages from './seed/languages.json';

/*
 ! Don't add 3000ms+ delay due to axios timeout set to 3000ms
*/

const API_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1';

// Array of handlers with different endpoints to mock.
export const handlers = [
  rest.get(`${API_URL}/languages`, (req, res, ctx) => {
    return res(
      ctx.delay(2500),
      ctx.status(200),
      ctx.json(languages),
    );
  }),
];
