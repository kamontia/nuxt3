import { test, expect } from '@playwright/test';

test('Add tasks', async ({ page }) => {

    /* Access todo apps */
    await page.goto('http://localhost:3000/');

    /* Add tasks */
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('task1');
    await page.getByRole('textbox').press('Enter');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('task2');
    await page.getByRole('button', { name: 'add' }).click();

    /* Check delete button is to be visible */
    await expect(page.getByText('task1Delete')).toBeVisible();
    await expect(page.getByText('task2Delete')).toBeVisible();

    /* Check # of tasks */
    // await page.waitForSelector("");
    // const elements = await page.locator('#__nuxt > div > div > ul').all()
    // await expect(elements).toEqual(2)

});

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('task1');
    await page.getByRole('textbox').press('Enter');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('task2');
    await page.getByRole('button', { name: 'add' }).click();
    await expect(page.getByText('task1Delete')).toBeVisible();
    await expect(page.getByText('task2Delete')).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Delete');
    await page.locator('li').filter({ hasText: 'task2Delete' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('task1');
    await page.getByRole('textbox').press('Enter');
    await page.getByRole('textbox').fill('task2');
    await page.getByRole('textbox').press('Enter');
    await page.getByRole('textbox').fill('task3');
    await page.getByRole('textbox').press('Enter');
    await expect(page.getByText('task1Delete')).toBeVisible();
    await page.getByText('task2Delete').click();
    await page.getByText('task3Delete').click();
    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(page.getByRole('textbox')).toBeEmpty();
});
