# Components

这个目录用于存放可重用的 Vue 组件。

## 自动导入

WXT 会自动导入这个目录中的组件，无需手动导入。

## 使用示例

```typescript
// 在任何 Vue 文件中直接使用，无需导入
<template>
  <MyComponent />
</template>
```

## 组件命名规范

- 使用 PascalCase 命名
- 组件文件名应与组件名一致
- 例：`MyButton.vue` -> `MyButton` 组件
