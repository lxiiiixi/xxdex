import { defineConfig } from 'tsup'
import { exec } from 'child_process'

export default defineConfig((options) => ({
  entry: {
    index: './src/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: false,
  treeshake: true,
  splitting: true,
  clean: !options.watch,
  onSuccess: async () => {
    // 当 tsup 完成主要的构建（生成 ESM 和 CJS 格式的文件）后，会执行 tsc --emitDeclarationOnly --declaration 命令来单独生成 TypeScript 的类型声明文件（.d.ts）。
    exec('tsc --emitDeclarationOnly --declaration', (err) => {
      if (err) {
        console.error(err)
        if (!options.watch) {
          process.exit(1)
        }
      }
    })
  },
}))
