# Git Bisect Automation with Jest

## About the Repository

This repository demonstrates an automated approach to `git bisect` using Node.js and Jest. By integrating automated testing, it identifies commits causing regressions or errors in the codebase. This project aims to save developers valuable time by removing the need for manual testing during the bisect process.

The repository is designed to:
- Automate `git bisect` using Node.js scripts.
- Integrate Jest to test individual commits.
- Simplify debugging and reduce the time spent identifying problematic commits.

## Features

- **Jest Integration**: Automates testing for each commit using Jest test cases.
- **Node.js Automation**: Leverages Node.js for script execution and streamlined workflows.
- **Time Efficiency**: Minimizes manual effort in the debugging process.
- **Easy to Use**: Simple setup and execution with clear documentation.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. ([Download Node.js](https://nodejs.org/))
- **Git**: Git must be installed. ([Download Git](https://git-scm.com/))
- **Jest**: This project uses Jest for testing; install it globally or as a dependency.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/git-bisect-jest.git
   cd git-bisect-jest

1. Clone the repository:
   ```bash
   npm install

## Usage

   ```bash
   git bisect start
   git bisect bad
   git bisect good <good-commit-hash (for our example use the first commit hash)>
   git bisect run node_modules/.bin/jest

