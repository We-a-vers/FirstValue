import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'ln9fyw9n',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-18',
});
