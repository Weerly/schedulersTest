export class Teacher {
  // tslint:disable-next-line:variable-name
  constructor(private id, private first_name, private last_name, private job_title, private age) {}

  updateTeacher(teacher: Teacher) {
    this.first_name = teacher.first_name;
    this.last_name = teacher.last_name;
    this.job_title = teacher.job_title;
    this.age = teacher.age;
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

  getJobTitle() {
    return this.job_title;
  }

  getAge() {
    return this.age;
  }
}
