import nextConfig from './config/eslint-config/next.js';
import nodeConfig from './config/eslint-config/node.js';
import baseConfig from './config/eslint-config/base.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper to generate TypeScript config for a package/app
function makeTsConfig({ name, tsconfigPath, globs = ['**/*.ts', '**/*.tsx'] }) {
  return {
    files: [`${name}/${globs[0]}`, `${name}/${globs[1]}`],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    ...baseConfig[1], // Spread your base TypeScript config/rules
  };
}

// List of packages/apps with TypeScript
const tsPackages = [
  { name: 'packages/auth', tsconfigPath: './packages/auth/tsconfig.json' },
  // Add more as needed, e.g.:
  // { name: 'apps/web', tsconfigPath: './apps/web/tsconfig.json' },
];

// Generate all TypeScript config blocks
const tsConfigs = tsPackages.map(makeTsConfig);

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
  ...tsConfigs, // Add all generated TypeScript configs
]; 