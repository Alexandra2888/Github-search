// tests/github-search.spec.ts
import { test, expect } from '@playwright/test';

test.describe('GitHub User Search App', () => {
  test('should search for a user and display their information', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://localhost:5173');

    // Fill in the search input and submit
    await page.fill('input[placeholder="Search GitHub username..."]', 'octocat');
    await page.click('button:has-text("Search")');

    // Wait for the user information to load
    await page.waitForSelector('text=The Octocat');

    // Check if user information is displayed correctly
    await expect(page.locator('h1:has-text("The Octocat")')).toBeVisible();
    await expect(page.locator('text=@octocat')).toBeVisible();
    await expect(page.locator('text=San Francisco')).toBeVisible();

    // Check for the presence of repo, followers, and following information
    await expect(page.locator('text=Repos')).toBeVisible();
    await expect(page.locator('text=Followers')).toBeVisible();
    await expect(page.locator('text=Following')).toBeVisible();
  });


  test('should handle empty search gracefully', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.click('button:has-text("Search")');


  });
});