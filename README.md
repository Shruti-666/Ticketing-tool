# Ticketing-tool
# Ticketing Tool - Angular 18

A modern ticketing system application built with **Angular 18**, designed to manage and track support tickets efficiently.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)
- [Useful Commands](#useful-commands)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Overview

The Ticketing Tool is a web-based application that allows users to:
- Create and manage support tickets
- Track ticket status and progress
- Organize tickets efficiently
- Streamline the ticket management workflow

This project leverages Angular 18's latest features including standalone components and the modern Angular build system.

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | 18.2.0 | Frontend framework |
| **TypeScript** | 5.5.2 | Programming language |
| **Bootstrap** | 5.3.8 | CSS framework |
| **RxJS** | 7.8.0 | Reactive programming |
| **Node.js** | 18+ | Runtime environment |
| **npm** | 9+ | Package manager |

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Verify Installation
Run the following commands in your terminal to verify installation:

```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Should be 2.0.0 or higher
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Ticketing-tool/ticketing_tool_angular18
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will download and install:
- Angular framework and CLI
- All required dependencies listed in `package.json`
- Development dependencies for testing and building

### 3. Verify Installation

After installation, verify the setup by checking if Angular CLI is properly installed:

```bash
ng version
```

You should see Angular CLI version information if everything is installed correctly.

---

## Project Structure

```
ticketing_tool_angular18/
├── src/                          # Source code directory
│   ├── app/                       # Application components and logic
│   │   ├── app.component.ts       # Root component logic
│   │   ├── app.component.html     # Root component template
│   │   ├── app.component.css      # Root component styles
│   │   ├── app.component.spec.ts  # Component unit tests
│   │   ├── app.config.ts          # App configuration (providers)
│   │   └── app.routes.ts          # Application routing configuration
│   ├── main.ts                    # Application entry point
│   ├── index.html                 # Main HTML file
│   └── styles.css                 # Global styles
├── public/                        # Static assets
├── dist/                          # Build output (generated after build)
├── angular.json                   # Angular CLI configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project metadata and dependencies
└── README.md                      # This file
```

### Key Files Explained

- **`src/main.ts`** - Application entry point where Angular bootstraps the app
- **`src/app/app.config.ts`** - Defines providers and global app configuration
- **`src/app/app.routes.ts`** - Contains route definitions for the application
- **`angular.json`** - Configuration file for Angular CLI build and development tools
- **`tsconfig.json`** - TypeScript compiler options and settings

---

## Development

### Start Development Server

Run the development server:

```bash
npm start
```

Or alternatively:

```bash
ng serve
```

**Output:**
The application will be available at `http://localhost:4200/`

**Features:**
- 🔄 **Hot Reload** - Application automatically refreshes when you save changes
- 🔍 **Source Maps** - Easy debugging with TypeScript source maps
- ⚡ **Fast Compilation** - Optimized for development speed

### Open in Browser

Once the server is running, open your browser and navigate to:
```
http://localhost:4200/
```

The page will automatically reload whenever you modify source files.

---

### Production Build

Create a production-ready build:

```bash
npm run build
```

Or use Angular CLI directly:

```bash
ng build
```

**Output:**
- Build artifacts are stored in the `dist/ticketing_tool_angular18/` directory
- Files are optimized, minified, and ready for deployment
- Bundle size and performance budgets are enforced (see `angular.json`)

### Development Build

Create an unoptimized build for debugging:

```bash
npm run build -- --configuration development
```

### Watch Mode

Build automatically whenever source files change:

```bash
npm run watch
```

This is useful during development when you need the built files but not the live server.

---

## Testing

### Run Unit Tests

Execute all unit tests:

```bash
npm test
```

Or using Angular CLI:

```bash
ng test
```

**Testing Framework:**
- **Karma** - Test runner
- **Jasmine** - Testing framework
- **Chrome Browser** - Default test browser

**Features:**
- Tests run in watch mode (re-run on file changes)
- Coverage reports available
- Headless mode support for CI/CD

### Generate Coverage Report

```bash
ng test --browsers=Chrome --code-coverage
```

Coverage reports will be generated in the `coverage/` directory.

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server on http://localhost:4200 |
| `npm run build` | Build the project for production |
| `npm run watch` | Watch and rebuild on file changes |
| `npm test` | Run unit tests with Karma |
| `ng generate component <name>` | Create a new component |
| `ng generate service <name>` | Create a new service |
| `ng generate module <name>` | Create a new module |
| `ng lint` | Run code linting (if available) |
| `ng version` | Display Angular CLI and package versions |

### Examples

**Generate a new component:**
```bash
ng generate component tickets/ticket-list
```

**Generate a service:**
```bash
ng generate service services/ticket
```

---

## Configuration

### Angular Configuration (`angular.json`)

Key configurations:
- **Output Path:** `dist/ticketing_tool_angular18/`
- **Source Root:** `src/`
- **Styles:** Bootstrap CSS is included globally
- **Build Budgets:**
  - Initial bundle: 500KB warning, 1MB error
  - Component styles: 2KB warning, 4KB error

### TypeScript Configuration (`tsconfig.json`)

Strict mode is enabled with:
- `strict: true` - Enables all strict type checking options
- `noImplicitAny` - Prevent implicit any types
- `noImplicitReturns` - Require explicit returns

### Bootstrap CSS Framework

Bootstrap 5.3.8 is pre-configured and available globally. Use Bootstrap classes in your templates:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">Click me</button>
    </div>
  </div>
</div>
```

---

## Troubleshooting

### Issue: Port 4200 Already in Use

**Solution:** Use a different port:
```bash
ng serve --port 4300
```

### Issue: Module Not Found Errors

**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Compilation Errors

**Solution:** Clear Angular cache and rebuild:
```bash
rm -rf .angular
npm run build
```

### Issue: Dependencies Installation Fails

**Solution:** Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Issue: Tests Won't Run

**Solution:** Make sure Chrome is installed, or use headless mode:
```bash
npm test -- --browsers=ChromeHeadless
```

---

## Environment Setup for Different Scenarios

### For Windows Users

1. Open **Command Prompt** or **PowerShell**
2. Navigate to the project directory
3. Run commands as specified (they work the same on Windows)

### For macOS Users

1. Open **Terminal**
2. Navigate to the project directory
3. Use the same commands

### For Linux Users

1. Open **Terminal**
2. Navigate to the project directory
3. Use the same commands

---

## Next Steps

1. **Familiarize yourself** with the [Angular Documentation](https://angular.dev/)
2. **Review the app structure** - Start with `src/app/app.component.ts`
3. **Create components** - Use `ng generate component` to create new features
4. **Implement services** - Use `ng generate service` for data management
5. **Add routes** - Update `src/app/app.routes.ts` for navigation
6. **Style components** - Use Bootstrap or custom CSS
7. **Write tests** - Create `.spec.ts` files for your components

---



## Additional Resources

- [Angular Official Documentation](https://angular.dev/)
- [Angular CLI Documentation](https://angular.io/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

---

## Project Information

- **Project Name:** Ticketing Tool Angular 18
- **Angular Version:** 18.2.21
- **Node Version Required:** 18+


---

