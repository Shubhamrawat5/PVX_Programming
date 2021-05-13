import { rest } from 'msw';

import languages from './seed/languages.json';

// TODO - Add this to env file.
// Base api url that can be reused.
const API_URL = 'http://localhost:3001/api/v1';

// Array of handlers with different endpoints to mock.
export const handlers = [
  rest.get(`${API_URL}/languages`, (req, res, ctx) => {
    // TODO - Add timeout once we add loading state in UI.
    return res(
      ctx.status(200),
      ctx.json(languages),
    );
  }),
];
