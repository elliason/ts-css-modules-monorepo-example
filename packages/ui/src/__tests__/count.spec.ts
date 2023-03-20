import { describe, it, expect } from 'vitest';
import { count } from '~/count';

describe('count', () => {
    it('should return the sum of two numbers', () => {
        expect(count(1, 2)).toBe(3);
    });
});
