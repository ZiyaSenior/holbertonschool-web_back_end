const stdin = process.openStdin();

process.stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
});

stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
