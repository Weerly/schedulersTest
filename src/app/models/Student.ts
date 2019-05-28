export class Student {
  // tslint:disable-next-line:variable-name
  constructor(private id, private first_name, private last_name, private age) {}

  updateStudent(student: Student) {
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.age = student.age;
  }

  getId(): number {
    return this.id;
  }

  getFirstName() {
    return this.first_name;
  }

  getLastName() {
    return this.last_name;
  }

  getAge() {
    return this.age;
  }
}
