const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        let output = 'This is the list of our studenets\n';
        for (const [field, names] of Object.entries(students).sort()) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        res.status(200).send(output);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((students) => {
          const names = students[major] || [];
          res.status(200).send(`List: ${names.join(', ')}`);
        })
        .catch(() => res.status(500).send('Cannot load the database'));
    }
  }
}

module.exports = StudentsController;
