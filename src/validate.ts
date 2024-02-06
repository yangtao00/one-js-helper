export function validateEmail(email: string): boolean {
  // 此处使用简单的正则表达式进行邮箱验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
