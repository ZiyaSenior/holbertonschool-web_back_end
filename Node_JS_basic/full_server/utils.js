import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
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

    resolve(fields);
  });
});

export default readDatabase;
