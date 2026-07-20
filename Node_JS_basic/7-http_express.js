const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.type('text/plain');
      res.send('This is the list of our students\nCannot load the database');
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fields = {};

    students.forEach((student) => {
      const record = student.split(',');
      const firstName = record[0];
      const field = record[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    let response = 'This is the list of our students\n';
    response += `Number of students: ${students.length}\n`;

    const fieldNames = Object.keys(fields);

    fieldNames.forEach((field, index) => {
      response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;

      if (index !== fieldNames.length - 1) {
        response += '\n';
      }
    });

    res.type('text/plain');
    res.send(response);
  });
});

app.listen(1245);

module.exports = app;
