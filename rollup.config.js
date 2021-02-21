import path from 'path'

import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import glob from 'glob'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

const ROOT_DIRECTORY = 'src'
const ROOT_FILE_PATH = `${ROOT_DIRECTORY}/index.ts`
const INDEX_FILES = glob.sync(`${ROOT_DIRECTORY}/**/index.ts`)

const input = INDEX_FILES.reduce((componentMap, currentPath) => {
  const currentPathSplit = currentPath.split(path.sep)
  const componentName =
    currentPath === ROOT_FILE_PATH
      ? 'index'
      : currentPathSplit[currentPathSplit.length - 2]

  if (!componentName) {
    return componentMap
  }

  return {
    ...componentMap,
    [componentName]: currentPath,
  }
}, {})

export default {
  cache: false,
  input,
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
      externalHelpers: true, // Exclude babel helpers.
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
