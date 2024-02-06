// __tests__/emailValidator.test.ts

import { validateEmail } from "../src";

describe("Email Validator", () => {
  test("Valid email should return true", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  test("Invalid email should return false", () => {
    expect(validateEmail("invalid_email")).toBe(false);
  });

  test('Email without "@" should return false', () => {
    expect(validateEmail("testexample.com")).toBe(false);
  });

  test('Email without "." should return false', () => {
    expect(validateEmail("test@examplecom")).toBe(false);
  });

  test("Email with spaces should return false", () => {
    expect(validateEmail("test @example.com")).toBe(false);
  });

  test("Empty email should return false", () => {
    expect(validateEmail("")).toBe(false);
  });
});
