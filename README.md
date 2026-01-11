## 🎭 Playwright JS Test Suite



A Playwright-based automation testing framework built using JavaScript for practicing and demonstrating end-to-end web testing concepts.
This project follows a clean and scalable structure suitable for learning modern test automation practices.

# 🔗 Application Under Test:
        https://freelance-learn-automation.vercel.app/

# 📌 Project Purpose

        1. This project was created as a practice / learning mini project to:

        2. Learn Playwright with JavaScript

        3. Understand end-to-end automation testing

        4. Implement reusable and maintainable test structure

        5. Gain hands-on experience with a real web application

# 🛠 Tech Stack

        1. Language: JavaScript (ES6)

        2. Automation Tool: Playwright

        3. Runtime: Node.js

        4. Test Runner: Playwright Test

        5. Reporting: Playwright HTML Report

# ✨ Features

        1. End-to-end UI automation using Playwright

        2. Supports modern browsers (Chromium, Firefox, WebKit)

        3. Clean folder structure

        4. Reusable utilities and page logic

        5. Easy setup and execution

        6. HTML test report generation

## 📂 Project Structure

playwright-js-test-suite/
├── .github/
│   └── workflows/          # GitHub Actions (CI)
├── pages/                  # Page Object files
├── tests/                  # Test cases
├── util/                   # Utility/helper methods
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies & scripts
└── README.md

# ⚙️ Prerequisites

Make sure you have the following installed:

Node.js (v16 or above)

npm

Check installation:

node -v
npm -v

# 🚀 Installation & Setup

Clone the repository

git clone https://github.com/nihitgarg07/playwright-js-test-suite.git


Navigate to the project directory

cd playwright-js-test-suite


Install dependencies

npm install


Install Playwright browsers

npx playwright install

# ▶️ Running Tests
Run all tests
npx playwright test

Run tests in headed mode
npx playwright test --headed

Run tests in a specific browser
npx playwright test --project=chromium

# 📊 View Test Report

After test execution, open the HTML report:

npx playwright show-report

# 🧪 Test Coverage

UI workflows

Form interactions

Navigation and validations

Cross-browser testing

# 📌 Future Improvements

Add API testing support

Add environment-based configuration

Integrate advanced reporting (Allure)

Increase test coverage

Add data-driven testing

# 👤 Author

Nihit Garg
GitHub: @nihitgarg07

This project is created for learning and practice purposes.