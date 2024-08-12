# Zadanie rekrutacyjne - test strony

- [Links](#links)
- [Commands](#commands)
- [Playwright](#playwright)
- [Other](#other)


## Links

- test site
https://www.saucedemo.com



## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://www.saucedemo.com`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`

### Updating Playwright

- check if Playwright should be updated  
  `npm outdated @playwright/test`
- update Playwright  
  `npm i @playwright/test`
- update browsers  
  `npx playwright install`
- verify Playwright version  
  `npx @playwright/test --version`



## Playwright

### Playwright Config modifications

- config file `playwright.config.ts`
- disable browsers, i.e. Firefox
  ```javascript
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  ```
- enable video on fail
  ```javascript
  use: {
      video: {'retain-on-failure'},
  },
  ```
- enable Trace Viewer on fail
  ```javascript
  use: {
      trace: {'retain-on-failure'},
  },
  ```

### Playwright snippets

- import:
  ```typescript
  import { test, expect } from '@playwright/test';
  ```
- test:
  ```typescript
  test('test description', async ({ page }) => {
    //your code
  });
  ```
- describe:
  ```typescript
  test.describe('Group description', () => {
    //your code
  });
  ```
- hook beforeEach:
  ```typescript
  test.befoerEach('async ({ page }) => {
    //your code
  });
  ```
- running given test: `test.only`


## Other


### package.json example scripts

- single command:  
  `"test": "npx playwright test",`
- command with parameters:  
  `"test:headed": "npx playwright test --headed",`
- other script with added parameters:  
  `"test:pulpit:hd" : "npm run test tests/order.spec.ts -- --headed"`

Scripts can be run in standard and debug mode by:

- hovering over script name and using opition **Run**
- entering command `npm run script_name` i.e. `npm run test`
- using `NPM Scripts` tab in **Explorer** view (need to be enabled in **EXPLORER** settings)



