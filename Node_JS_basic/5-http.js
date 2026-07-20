const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      let output = 'This is the list of our students\n';
      output += `Number of students: ${students.length}\n`;

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

      const fieldNames = Object.keys(fields);

      fieldNames.forEach((field, index) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;

        if (index !== fieldNames.length - 1) {
          output += '\n';
        }
      });

      res.end(output);
    });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
