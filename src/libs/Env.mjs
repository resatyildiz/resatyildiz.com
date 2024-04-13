/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {},
  client: {},
  runtimeEnv: {},
});
