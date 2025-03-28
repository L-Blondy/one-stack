import { tsupBuildOptions } from '../../tsup/build'
import { defineConfig } from 'tsup'

export const buildOptions = tsupBuildOptions({
  emitter: './src/emitter/index.ts',
  'entries-of': './src/entries-of/index.ts',
  'forward-generic-ref': './src/forward-generic-ref/index.ts',
  'get-element-uid': './src/get-element-uid/index.ts',
  invariant: './src/invariant/index.ts',
  'is-server': './src/is-server/index.ts',
  'keys-of': './src/keys-of/index.ts',
  noop: './src/noop/index.ts',
  'strip-undefined': './src/strip-undefined/index.ts',
  timeout: './src/timeout/index.ts',
  types: './src/types/index.ts',
  validate: './src/validate/index.ts',
  'values-of': './src/values-of/index.ts',
})
export default defineConfig(buildOptions)
