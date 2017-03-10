import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/index.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    buble(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  dest: process.env.target + '/bundle.js'
}

