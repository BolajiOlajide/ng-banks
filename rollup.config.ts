import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';


const extensions = ['.ts'];

export default {
  input: 'index.ts',
  plugins: [
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    {
      name: pkg.name,
      file: pkg.umd,
      format: 'umd',
      sourcemap: true
    }
  ]
};
