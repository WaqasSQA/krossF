import { test, expect } from "@playwright/test";
import { signUp } from "../pom/signUp";
import { login } from "../pom/login";

let page;

test.beforeEach(async ({browser})=>{
  page = await browser.newPage()
})

test("Sign Up", async ({}) => {
  const sign_up = new signUp(page)
  await page.goto("/")
  await sign_up.actions()

  await page.waitForTimeout(2000)

  expect(await page.$('//div[@id="msg"]')).toBeFalsy()
  expect(page.url()).toBe('https://news.hada.io/welcome')

})

test("Login", async ({})=>{
  const login_page = new login(page)

  await page.waitForTimeout(4000)
  await page.goto("/")
  await login_page.actions()

  expect(page.url()).toBe('https://news.hada.io/')
  await page.waitForSelector('.topics')
  const elementExists = await page.$('.topics');
  expect(elementExists).not.toBeNull();

})
