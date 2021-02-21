import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

export default {
  cache: false,
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    external({
      preferBuiltins: false,
    }),
    babel({
      exclude: /node_modules/,
      externalHelpers: true,
      plugins: ['external-helpers'],
    }),
    json(),
    resolve({
      moduleDirectories: ['src', 'node_modules'],
    }),
    typescript({
      clean: true,
      typescript: require('ttypescript'),
    }),
    url(),
  ],
}
