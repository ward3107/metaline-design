import { he } from './he';
import { en } from './en';
import { Language } from '../languages';

export const CONTENT = {
  [Language.HE]: he,
  [Language.EN]: en,
  // Arabic translations can be added here when ready
  // [Language.AR]: ar,
};

export type Content = typeof he; // All languages have the same structure
