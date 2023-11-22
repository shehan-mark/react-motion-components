import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import scss from "rollup-plugin-postcss";
import postcss from "rollup-plugin-scss";

import { visualizer } from "rollup-plugin-visualizer";

import packageJson from './package.json' assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
      }),
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|sass|scss)$/], // asking not to process these types of files
  },
  {
    input: 'styles/r-r-gui.scss',
    plugins: scss({
      output: packageJson.styles,
    }),
  },
];

const extensions = ['.js', '.ts', '.jsx', '.tsx'];


// export default {
//   input: [
//     './src/index.ts',
//   ],
//   output: {
//     dir: 'dist',
//     format: 'esm',
//     preserveModules: true,
//     preserveModulesRoot: 'src',
//     sourcemap: true,
//   },
//   plugins: [
//     resolve(),
//     commonjs(),
//     typescript({
//       tsconfig: './tsconfig.json',
//       declaration: true,
//       declarationDir: 'dist',
//     }),
//     postcss(),
//     terser(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    //   open: true,
    // }),
//   ],
//   external: ['react', 'react-dom'],
// };