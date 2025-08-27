import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { WxtVitest } from 'wxt/testing';

export default defineConfig({
  plugins: [vue(), WxtVitest()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'entrypoints/**/*.{ts,vue}',
        'utils/**/*.ts',
        'config/**/*.ts',
        'types/**/*.ts'
      ],
      exclude: [
        'node_modules/**',
        '.wxt/**',
        '.output/**',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.spec.ts'
      ]
    },
    include: [
      'tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ]
  }
});
