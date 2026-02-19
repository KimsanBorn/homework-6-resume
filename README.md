[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22761603)
# Handlebars Templating Tutorial

A minimal Express.js application demonstrating fundamental Handlebars templating concepts for educational purposes.

## 📚 Learning Objectives

This application teaches four core templating concepts:

1. **Render Context** - Passing data from routes to templates
2. **Built-in Helpers** - Using `{{#if}}`, `{{#each}}`, and `{{#unless}}`
3. **Layouts** - Creating consistent page structure with sections
4. **Partials** - Building reusable template components

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd /home/joe/lectures/inf653/builder/practices/7_templating
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
/project-root
  /views
    /layouts
      main.handlebars       # Main layout wrapper
    /partials
      header.handlebars     # Reusable header component
      footer.handlebars     # Reusable footer component
    home.handlebars         # Home page template
    students.handlebars     # Students page template
  app.js                    # Express server with routes
  package.json              # Project dependencies
  README.md                 # This file
```

## 🎯 Routes and Teaching Points

### 1. GET `/` - Home Page
**Teaching Focus:** Render Context

Demonstrates how to pass data from route handlers to templates:
```javascript
const context = {
  pageTitle: 'Welcome to Handlebars Tutorial',
  instructor: 'Your Name',
  courseCode: 'WEB301',
  isActive: true
};
res.render('home', context);
```

**What Students Learn:**
- Accessing variables with `{{variableName}}`
- Understanding the context object
- Basic conditional rendering with `{{#if}}`

### 2. GET `/students` - Student Records
**Teaching Focus:** Built-in Helpers

Demonstrates three essential Handlebars helpers:

**a) `{{#each}}` - Iteration**
```handlebars
{{#each students}}
  <li>{{this.name}} - Score: {{this.score}}</li>
{{/each}}
```

**b) `{{#if}}/{{else}}` - Conditionals**
```handlebars
{{#if passed}}
  <span class="pass">✓ Passed</span>
{{else}}
  <span class="fail">✗ Failed</span>
{{/if}}
```

**c) `{{#unless}}` - Negative Conditionals**
```handlebars
{{#unless showFailedWarning}}
  <p>All systems normal</p>
{{/unless}}
```

**What Students Learn:**
- Looping through arrays
- Accessing nested properties with `this.property`
- Conditional content rendering
- Difference between `{{#if}}` and `{{#unless}}`

## 🏗️ Layouts and Partials

### Layouts (views/layouts/main.handlebars)
Provides consistent structure across all pages:
- `{{{body}}}` section where page content is injected
- Triple braces allow HTML from child templates

### Partials
Reusable components included with `{{> partialName}}`:
- **header.handlebars** - Navigation and page title
- **footer.handlebars** - Copyright and credits

## 🔧 Code Features

- **ES6+ Standards**: Uses `const`, `let`, arrow functions
- **Error Handling**: Try-catch blocks in routes, 404 handler
- **Educational Comments**: Inline explanations for beginners
- **Clean Code**: Descriptive variable names, clear structure

## 💻 Development Commands

```bash
# Start the server
npm start

# Alternative start command
npm run dev
```

## 🧪 Validation Checklist

- ✅ Server starts without errors on port 3000
- ✅ Both routes (/ and /students) render correctly
- ✅ All 4 teaching objectives are demonstrated
- ✅ Partials reuse works (header/footer on both pages)
- ✅ Comments explain Handlebars syntax
- ✅ ES6+ code standards followed

## 📖 Additional Resources

- [Handlebars Official Documentation](https://handlebarsjs.com/)
- [Express.js Guide](https://expressjs.com/)
- [express-handlebars Package](https://www.npmjs.com/package/express-handlebars)

## 👨‍🏫 For Instructors

This application is designed for classroom demonstration. Each route focuses on specific concepts that can be taught independently or as a progression:

1. Start with the home page to show basic context passing
2. Move to the students page to demonstrate helpers
3. View source code to show layout and partial implementation
4. Modify data in routes to show real-time template updates

## 📝 License

MIT License - Free for educational use

---

**Built with ❤️ for teaching purposes**
