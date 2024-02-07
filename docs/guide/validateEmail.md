# 验证

## 验证邮箱

::: code-group

```ts [demo]
import { validateEmail } from 'one-js-helper';
validateEmail('test@example.com'); // true
validateEmail('test'); // false
```

```ts [code]
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```
