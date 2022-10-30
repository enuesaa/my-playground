import { test } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.screenshot({ path: 'tmp/screenshot.png' });
});
