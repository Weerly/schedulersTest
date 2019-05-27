export class Student {
  // id: number;
  // first_name: string;
  // last_name: string;
  // age: number;
  constructor(private id, private first_name, private last_name, private age) {}

  updateStudent(student: Student) {
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.age = student.age;
  }

  getId(): number {
    return this.id;
  }

  getObject(): object {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age
    }
  }
}
