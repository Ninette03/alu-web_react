import {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
} from './utils';

describe('utils functions', () => {
  describe('getFullYear', () => {
    it('returns the current year', () => {
      // Avoid time bomb by computing the expected year dynamically
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    it('returns the correct string when argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('returns the correct string when argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    it('returns the correct notification string', () => {
      expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
    });
  });
});
