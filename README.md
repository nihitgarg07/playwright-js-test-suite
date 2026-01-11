🎭 Playwright JS Test Suite








A Playwright-based automation testing framework built using JavaScript for practicing and demonstrating end-to-end web testing concepts.
This project follows a clean and scalable structure suitable for learning modern test automation practices.

🔗 Application Under Test:
https://freelance-learn-automation.vercel.app/

📌 Project Purpose

This project was created as a practice / learning mini project to:

Learn Playwright with JavaScript

Understand end-to-end automation testing

Implement reusable and maintainable test structure

Gain hands-on experience with a real web application

🛠 Tech Stack

Language: JavaScript (ES6)

Automation Tool: Playwright

Runtime: Node.js

Test Runner: Playwright Test

Reporting: Playwright HTML Report

✨ Features

End-to-end UI automation using Playwright

Supports modern browsers (Chromium, Firefox, WebKit)

Clean folder structure

Reusable utilities and page logic

Easy setup and execution

HTML test report generation

📂 Project Structure
playwright-js-test-suite/
│
├── .github/workflows/      # GitHub Actions (CI)
├── pages/                  # Page Object files
├── tests/                  # Test cases
├── util/                   # Utility/helper methods
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies & scripts
└── README.md

⚙️ Prerequisites

Make sure you have the following installed:

Node.js (v16 or above)

npm

Check installation:

node -v
npm -v

🚀 Installation & Setup

Clone the repository

git clone https://github.com/nihitgarg07/playwright-js-test-suite.git


Navigate to the project directory

cd playwright-js-test-suite


Install dependencies

npm install


Install Playwright browsers

npx playwright install

▶️ Running Tests
Run all tests
npx playwright test

Run tests in headed mode
npx playwright test --headed

Run tests in a specific browser
npx playwright test --project=chromium

📊 View Test Report

After test execution, open the HTML report:

npx playwright show-report

🧪 Test Coverage

UI workflows

Form interactions

Navigation and validations

Cross-browser testing

📌 Future Improvements

Add API testing support

Add environment-based configuration

Integrate advanced reporting (Allure)

Increase test coverage

Add data-driven testing

👤 Author

Nihit Garg
GitHub: @nihitgarg07

This project is created for learning and practice purposes.