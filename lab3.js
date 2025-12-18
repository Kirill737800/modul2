// 1.
const studentJSON = `{"lastName": "Иванов","firstName": "Иван","marks": [{"subject": "Математика","value": 5},{"subject": "Физика","value": 4}]}`;

function printStudentInfo(jsonString) {
  const student = JSON.parse(jsonString);
  console.log("Student Info:", student.firstName, student.lastName, student.marks);
}
// 2.
class Mark {
  constructor(subject, value) {
    this.subject = subject;
    this.value = value;
  }
}

class Student {
  constructor(lastName, firstName, marks = []) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.marks = marks;
  }
}
// 3.
class StudentWithAverage extends Student {
  getAverageMark() {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, current) => acc + current.value, 0);
    return sum / this.marks.length;
  }
}
// 4.
class StudentWithSubjectMarks extends Student {
  getMarksBySubject(subjectName) {
    return this.marks
      .filter(mark => mark.subject === subjectName)
      .map(mark => mark.value);
  }
}
// 5. 
class StudentWithAddMark extends Student {
  addMark(subject, value) {
    this.marks.push(new Mark(subject, value));
  }
}
// 6. 
class StudentWithRemoveMark extends Student {
  removeMarksBySubject(subjectName) {
    this.marks = this.marks.filter(mark => mark.subject !== subjectName);
  }
}

