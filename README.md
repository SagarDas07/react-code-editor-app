# CodeCraft Studio

A modern, multi-language online code editor built with React, Vite, Chakra UI, and Monaco Editor. Write, run, and experiment with code instantly in your browser—no installation required!

## ✨ Features
- **Multi-language Support:** Write code in JavaScript, TypeScript, Python, Java, C#, and PHP with syntax highlighting.
- **Instant Output:** Run your code and see results instantly in the browser.
- **Responsive, Modern UI:** Beautiful, mobile-friendly interface with dark mode.
- **No Installation Needed:** Start coding right away in your browser—no setup required!
- **Community Driven:** Built for learners, educators, and developers.

## 🖥️ Tech Stack
- [React](https://react.dev/) (UI Framework)
- [Vite](https://vitejs.dev/) (Build Tool)
- [Chakra UI](https://chakra-ui.com/) (Component Library)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) (Code Editing)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SagarDas07/react-code-editor-app
cd react-code-editor-app
```

### 2. Install Node.js and npm
- Download and install Node.js (which includes npm) from [nodejs.org](https://nodejs.org/).
- To check if Node.js and npm are installed, run:
```bash
node -v
npm -v
```

### 3. Install project dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```
- The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🛠️ Terminal Commands & Setup Steps

1. **Install Node.js and npm**
   - Download from [nodejs.org](https://nodejs.org/)
   - Install and verify:
     ```bash
     node -v
     npm -v
     ```

2. **Navigate to your project folder**
   ```bash
   cd path/to/react-code-editor-app
   ```

3. **Install all required packages**
   ```bash
   npm install
   ```
   - This installs all dependencies listed in `package.json` (React, Vite, Chakra UI, Monaco Editor, etc.)

4. **Start the development server**
   ```bash
   npm run dev
   ```
   - Opens the app locally for development.

5. **Install a new package (if needed)**
   ```bash
   npm install <package-name>
   ```
   - Example: `npm install axios`

6. **Check for outdated packages**
   ```bash
   npm outdated
   ```

7. **Update all packages**
   ```bash
   npm update
   ```

8. **Stop the dev server**
   - Press `Ctrl + C` in the terminal.

9. **Clear the terminal**
   - On Windows: `cls`
   - On Mac/Linux: `clear`

---

## 📁 Full Project Structure

```
react-code-editor-app/
├── .git/
├── .gitignore
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── public/
├── README.md
├── vite.config.js
└── src/
    ├── api.js
    ├── App.jsx
    ├── constants.js
    ├── main.jsx
    ├── theme.js
    ├── components/
    │   ├── CodeEditor.jsx
    │   ├── Footer.jsx
    │   ├── LanguageSelector.jsx
    │   ├── NavBar.jsx
    │   ├── Output.jsx
    │   └── ThemeToggle.jsx
    └── pages/
        ├── About.jsx
        ├── Contact.jsx
        ├── Editor.jsx
        └── Home.jsx
```

## 👤 About the Developer
Created by **Sagar Das**. If you have feedback or want to collaborate, visit the [Contact](./src/pages/Contact.jsx) page or email dass14177@gmail.com.

---

Enjoy coding with CodeCraft Studio!
