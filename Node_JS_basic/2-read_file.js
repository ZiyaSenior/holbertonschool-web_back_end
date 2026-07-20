const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

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

  Object.keys(fields).forEach((field) => {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
    );
  });
}

module.exports = countStudents;
