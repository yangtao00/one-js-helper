import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // 入口文件路径
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 使用 TypeScript 插件
    terser(), // 使用 terser 进行代码压缩
  ],
  external: [], // 将你的依赖项添加到此处，以防止它们被打包
};
