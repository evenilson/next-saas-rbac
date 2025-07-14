import nextConfig from './config/eslint-config/next.js';
import nodeConfig from './config/eslint-config/node.js';
import baseConfig from './config/eslint-config/base.js';

export default [
  {
    files: ['apps/**/*.{js,jsx,ts,tsx}'],
    ...nextConfig[0],
    ...nextConfig[1],
    ...nextConfig[2],
  },
  {
    files: ['config/**/*.{js,ts}'],
    ...nodeConfig[0],
    ...nodeConfig[1],
  },
  {
    files: ['packages/**/*.{js,ts,tsx}'],
    ...baseConfig[0],
    ...baseConfig[1],
  },
]; 