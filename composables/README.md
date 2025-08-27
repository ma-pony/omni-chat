# Composables

这个目录用于存放 Vue 3 组合函数 (Composables)。

## 自动导入

WXT 会自动导入这个目录中的组合函数，无需手动导入。

## 命名规范

- 组合函数应以 `use` 开头
- 使用 camelCase 命名
- 例：`useStorage.ts` -> `useStorage()` 函数

## 使用示例

```typescript
// useStorage.ts
export function useStorage() {
  // 组合函数逻辑
  return {
    // 返回响应式数据和方法
  }
}

// 在 Vue 组件中使用，无需导入
<script setup>
const { data, method } = useStorage()
</script>
```

## 相关文档

- [Vue 3 Composables](https://vuejs.org/guide/reusability/composables.html)
- [WXT Auto Imports](https://wxt.dev/guide/essentials/auto-imports.html)
