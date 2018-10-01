

export default class Emp {

  var ename;
  var age;
  constructor(ename) {
    this.ename = ename;
  }

  setEmp(ename, age) {
     this.ename = ename;
     this.age = age;
  }

  get empName() {
    this.ename;
  }

  get empAge() {
    this.age;
  }


}
