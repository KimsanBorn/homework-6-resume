const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
    extname: '.handlebars',
    partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: {
    section(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
  })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const resumeContext = {
    pageTitle: 'My Resume',
    name: 'Born Kimsan',
    title: 'Student',
    email: '2023013born@aupp.edu.kh',
    phone: '+855 12 345 678',
    location: 'Phnom Penh, Cambodia',
    showOpenToWork: false,
    summary:
      'I enjoy learning new technology and reading manga. I am currently a student at AUPP, majoring in Information Technology Management and Computer Science. I have experience in web development and data analytics.',
    education: [
      {
        school: 'AUPP',
        program: 'Information Technology Management and Computer Science',
        year: 'Year 4 - Expected Graduation: 2026'
      },
      {
        school: 'National University of Management',
        program: 'Management',
        year: 'Complete'
      }
  ],
    experiences: [
      {
        role: 'Internship',
        company: 'Ministry of Post and Telecommunications',
        period: 'May 2025 - July 2025',
        details: 'Learn about basic networking.'
      },
      {
        role: 'Part-time Web Developer',
        company: 'Hong Leng Hour',
        period: 'September 2025 - Now',
        details: 'Created a small customer support bot for Telegram using python and small scale Laravel project.'
      },
    ],
    skills: [
      { name: 'Laravel', level: 'Intermediate' },
      { name: 'Python', level: 'Basic' },
      { name: 'Data Analytic', level: 'Intermediate' },
    ],
    projects: [
      {
        name: 'Facial Recognition Attendance System',
        description: 'Final Year project building with python to track attendance.',
      }, 
      {
        name: 'Customer Support Bot',
        description: 'A small customer support bot for Telegram using python.',
      },
      {
        name: 'Laravel HR system',
        description: 'On going laravel project to keep track of employee attendance(Checkin and Checkout) with an employee management that allow HR and Manager manger their department and employee.',
      },
    ],
    hobbies: ['Reading Manga', 'Watching Youtube', 'Gaming']
  };

  res.render('resume', resumeContext);
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
