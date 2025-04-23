# 🚀 Cypress Automation Project

This is a full-featured test automation framework built using **Cypress** for both **UI** and **API testing**.

> 🔍 UI Target: [saucedemo.com](https://www.saucedemo.com/)  
> 🔗 API Target: [reqres.in](https://reqres.in/)

---

## Tech Stack
- ✅ Cypress for UI and API testing
- 🔁 GitHub Actions (CI/CD)
- 🧩 Page Object Model (POM) for maintainable UI tests
- 📂 Data-driven testing with `data-testid` selectors
- 🌐 ReqRes API (for API testing demo)

## Project Structure

```plaintext
cypress-automation-project/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── users.cy.js
│   │   └── ui/
│   │       └── login.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   └── loginPage.js
│   └── support/
│   │   └── commands.js
│   │   └── e2e.js
├── .github/
│   └── workflows/
│       └── run-tests.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧪 Example Test Cases

### ✅ UI Test (SauceDemo)
- Login with valid credentials
- Login with invalid credentials
- Page redirection and assertions

### 🌐 API Test (Reqres.in)
- `GET /users` – List users
- `POST /login` – Login success/failure
- `DELETE /users/:id` – Delete user

---

## 🚀 How to Run Locally

### 📦 Install project dependencies (including Cypress)
If you've cloned the project and `cypress` is listed in `package.json`, simply run:
```bash
npm install
```

#### ▶️ Run all tests (headless mode)
```bash
npx cypress run
```

#### 🧪 Open Cypress UI (interactive mode)
```bash
npx cypress open
```
---
## 🔄 Continuous Integration

This project uses GitHub Actions to automatically run Cypress tests on:

- Pushes to any branch
- Pull Requests

Workflow file: `.github/workflows/run-tests.yml`

## 📌 Author
> #### Bruno Vieira
> QA Automation Engineer | JavaScript | Cypress | API Testing
