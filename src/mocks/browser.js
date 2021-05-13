import { setupWorker } from 'msw';
import { handlers } from './handler';

// Configures worker with the request handlers defined in "handler.js" file.
export const worker = setupWorker(...handlers);
