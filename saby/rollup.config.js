import { mkdirSync } from 'fs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
// @ts-ignore
import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'


mkdirSync('./test', { recursive: true })


export default [{
  input: 'src__turn-on-in-accordion.js',
  treeshake: false,
  output: { file: 'turn-on-in-accordion.js', format: 'esm', compact: true },
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    // @ts-ignore
    postcss({ extract: true, minimize: true, use: [['sass', { includePaths: ['node_modules'] }]] }),
    cleanup({ comments: 'none' }),
    terser()
  ]
}]
