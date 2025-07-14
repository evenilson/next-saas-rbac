import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
    },
  },
]
