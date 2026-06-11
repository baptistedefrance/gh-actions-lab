import { describe, expect, it } from 'vitest';
import { add, multiply } from '../src/calculator.js';

describe('calculator', () => {
  it('additionne deux nombres', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplie deux nombres', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});
