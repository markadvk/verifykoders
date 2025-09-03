
# VerifyKoders - Automation Testing Hub

Welcome to **VerifyKoders**! This website is dedicated to providing hands-on tutorials for learning **Playwright** automation testing through various scenarios and examples. The website is designed for anyone looking to get started with Playwright, from beginners to advanced testers.

## Features

- Interactive examples of Playwright components and their usage.
- Step-by-step guides for automating UI tests using Playwright.
- Covers common web testing scenarios like extracting elements, dropdowns, forms, checkboxes, iframes, alerts, file uploads, and more.
- Each scenario is self-contained with its own HTML, CSS, and JavaScript files.

## Project Structure

The project is organized into the following structure:

```
verifykoders/
├── index.html            # Landing page (entry point)
├── components/           # Component-specific pages and examples
│   ├── extract-element/  # Example: Extract Element
│   ├── dropdowns/        # Example: Dropdowns
│   ├── radio-checkbox/   # Example: Radio Buttons & Checkboxes
│   └── ...
├── assets/               # Folder for images, fonts, and other assets
├── css/                  # Folder for CSS files
├── js/                   # Folder for JavaScript files
└── README.md             # Project documentation
```

### Key Directories

- **components/**: Contains individual component pages for each Playwright automation scenario.
- **assets/**: Stores images, fonts, and other static assets used by the website.
- **css/**: Holds all CSS files, including global styles (`main.css`) and component-specific styles.
- **js/**: Contains JavaScript files, such as global scripts and component-specific interactions.

## Setup Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox, Edge)
- A code editor (e.g., VS Code) to edit and view files
- Local server (optional, for testing dynamic behavior)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/markadvk/verifykoders.git
   ```

2. **Navigate to the Project Folder**

   ```bash
   cd verifykoders
   ```

3. **Open `index.html` in Your Browser**

   You can open the `index.html` file directly in any web browser.

   If you want to serve the site dynamically, you can use a simple local server:

   - Using Python (if installed):
     ```bash
     python -m http.server
     ```

   - Using Node.js with `http-server` (if installed):
     ```bash
     npx http-server
     ```

4. **Explore the Examples**

   Navigate through the different components by clicking the links in the **index.html** file. Each link will take you to a different scenario showcasing a specific Playwright functionality.

## Contributing

If you'd like to contribute to this project, feel free to open a pull request with your changes. You can contribute in the following ways:

- Suggest new tutorials or Playwright scenarios to be added.
- Improve existing examples or add detailed explanations.
- Fix bugs or improve the documentation.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-name`).
5. Create a pull request on GitHub.

## License

This project is open-source and available under the MIT License.

## Contact

If you have any questions or feedback, feel free to reach out to me via GitHub issues or directly at [markadvk.sdet@gmail.com]
