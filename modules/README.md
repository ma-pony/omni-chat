# Modules

这个目录用于存放本地 WXT 模块。

## WXT 模块

WXT 模块是用于扩展 WXT 功能的可重用代码包。你可以在这里创建项目特定的模块。

## 模块结构

```
modules/
  my-module/
    index.ts        # 模块入口文件
    runtime/        # 运行时代码
    build/          # 构建时代码
```

## 创建模块

```typescript
// modules/my-module/index.ts
import { defineModule } from 'wxt/modules'

export default defineModule({
  meta: {
    name: 'my-module'
  },
  setup(wxt, options) {
    // 模块配置逻辑
  }
})
```

## 使用模块

```typescript
// wxt.config.ts
export default defineConfig({
  modules: [
    './modules/my-module'
  ]
})
```

## 相关文档

- [WXT Modules](https://wxt.dev/guide/essentials/modules.html)
