# Ticketing-tool
# Ticketing Tool - Angular 18

A comprehensive ticketing system built with Angular 18, featuring user authentication, ticket management, and administrative controls for departments, employees, and categories.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Database Management](#database-management)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)
- [Useful Commands](#useful-commands)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

---

## Overview

The Ticketing Tool is a full-stack web application designed for managing support tickets in an organization. It provides a user-friendly interface for creating, tracking, and resolving tickets, while offering administrative features for managing departments, employees, and ticket categories.

The application uses Angular 18 for the frontend and a mock REST API backend powered by JSON Server for development and testing purposes.

---

## Features

### User Authentication
- Secure login system
- Session-based authentication
- Protected routes for authenticated users

### Ticket Management
- Create new support tickets
- View and filter ticket lists
- Track ticket status and progress
- Assign tickets to departments and employees

### Administrative Features
- **Department Management**: Add, edit, and delete departments
- **Employee Management**: Manage employee records and assignments
- **Category Management**: Organize tickets with parent and child categories
  - Parent categories for broad classification
  - Child categories for detailed sub-classification

### Dashboard
- Overview of ticket statistics
- Quick access to recent tickets
- Navigation to all major features

### Responsive Design
- Mobile-friendly interface using Bootstrap 5
- Consistent UI across all pages

---

## How It Works

### Architecture
The application follows a client-server architecture:

1. **Frontend (Angular 18)**: Handles user interface, routing, and client-side logic
2. **Backend (JSON Server)**: Provides REST API endpoints for data management
3. **Proxy Configuration**: Angular's development server proxies API calls to the backend

### Data Flow
- Users interact with Angular components in the browser
- Components call services to make HTTP requests
- Requests are proxied to the JSON Server backend
- Data is stored and retrieved from the mock database (db.json)

### Key Components
- **Login Component**: Handles user authentication
- **Layout Component**: Provides navigation and layout for authenticated pages
- **Dashboard Component**: Displays overview and statistics
- **Department/Employee/Category Components**: CRUD operations for administrative data
- **Ticket Components**: Create and list tickets
- **Master Service**: Centralized service for all API interactions

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | 18.2.0 | Frontend framework with standalone components |
| **TypeScript** | 5.5.2 | Type-safe programming language |
| **Bootstrap** | 5.3.8 | Responsive CSS framework |
| **RxJS** | 7.8.0 | Reactive programming for async operations |
| **JSON Server** | Latest | Mock REST API backend |
| **Node.js** | 18+ | Runtime environment |
| **npm** | 9+ | Package manager |

---

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git**

Verify installation:
```bash
node --version  # v18.0.0+
npm --version   # 9.0.0+
git --version   # 2.0.0+
```

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Ticketing-tool/ticketing_tool_angular18
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify setup**:
   ```bash
   ng version
   ```

---

## Database Management

The application uses a mock database for development and testing. The database is managed using JSON Server, which provides a full REST API based on a JSON file.

### Database File
- **Location**: `db.json`
- **Structure**: Contains collections for users, departments, employees, categories, and tickets

### Running the Backend
To start the mock API server:

```bash
npx json-server db.json --port 3001
```

This will:
- Start a REST API server on `http://localhost:3001`
- Provide endpoints like `/api/users`, `/api/departments`, etc.
- Support full CRUD operations
- Persist data changes to `db.json`

### API Endpoints
The backend provides the following main endpoints:
- `GET/POST/PUT/DELETE /api/users` - User management
- `GET/POST/PUT/DELETE /api/departments` - Department CRUD
- `GET/POST/PUT/DELETE /api/employees` - Employee CRUD
- `GET/POST/PUT/DELETE /api/parentcategories` - Parent category CRUD
- `GET/POST/PUT/DELETE /api/childcategories` - Child category CRUD
- `GET/POST/PUT/DELETE /api/tickets` - Ticket CRUD

### Proxy Configuration
The `proxy.conf.json` file configures Angular's development server to proxy all `/api/*` requests to `http://localhost:3001`, allowing seamless communication between frontend and backend during development.

---

## Project Structure

```
ticketing_tool_angular18/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/             # Authentication page
│   │   │   ├── layout/            # Main layout with navigation
│   │   │   ├── dashboard/         # Overview dashboard
│   │   │   ├── department/        # Department management
│   │   │   ├── employee/          # Employee management
│   │   │   ├── parentcategory/    # Parent category management
│   │   │   ├── childcategory/     # Child category management
│   │   │   ├── new-ticket/        # Ticket creation form
│   │   │   └── ticket-list/       # Ticket listing and management
│   │   ├── services/
│   │   │   └── master.service.ts  # Centralized API service
│   │   ├── app.routes.ts          # Route definitions
│   │   └── app.config.ts          # App configuration
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── db.json                        # Mock database
├── proxy.conf.json                # API proxy configuration
├── angular.json
├── package.json
└── README.md
```

---

## Development

### Start the Application

1. **Start the backend** (in one terminal):
   ```bash
   npx json-server db.json --port 3001
   ```

2. **Start the frontend** (in another terminal):
   ```bash
   npm start
   ```

3. **Open in browser**:
   ```bash
   "$BROWSER" http://localhost:4200
   ```

### Development Workflow
- Make changes to Angular components
- API calls are automatically proxied to the JSON Server
- Hot reload refreshes the browser on file changes
- Data persists in `db.json` between sessions

---

## Build

### Production Build
```bash
npm run build
```

### Development Build
```bash
npm run build -- --configuration development
```

---

## Testing

```bash
npm test
```

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `npx json-server db.json --port 3001` | Start mock API server |
| `npm start` | Start Angular dev server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |

---

## Configuration

### Proxy Configuration (`proxy.conf.json`)
```json
{
  "/api/*": {
    "target": "http://localhost:3001",
    "secure": false,
    "changeOrigin": true
  }
}
```

### Database Schema (`db.json`)
Contains initial data for all entities. Modify this file to add sample data or change the schema.

---

## Troubleshooting

### Backend Not Starting
- Ensure port 3001 is available
- Check if `db.json` exists and is valid JSON

### API Calls Failing
- Verify JSON Server is running on port 3001
- Check proxy configuration in `proxy.conf.json`

---

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [Bootstrap Documentation](https://getbootstrap.com/)

--- 

## Project Information

- **Project Name:** Ticketing Tool Angular 18
- **Angular Version:** 18.2.21
- **Node Version Required:** 18+
- **Database:** Mock JSON Server (for development)

